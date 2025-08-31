use tauri::Manager;
use tauri::Emitter;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .setup(|app| {
            #[cfg(desktop)]
            {
            use tauri_plugin_global_shortcut::{
                Code, GlobalShortcutExt, Modifiers, Shortcut, ShortcutState,
            };

            // Atalho Ctrl+N (ou Cmd+N no macOS)
            let ctrl_n_shortcut = if cfg!(target_os = "macos") {
                Shortcut::new(Some(Modifiers::SUPER), Code::KeyN)
            } else {
                Shortcut::new(Some(Modifiers::CONTROL), Code::KeyN)
            };

            // Atalho Ctrl+P (ou Cmd+P no macOS)
            let ctrl_p_shortcut = if cfg!(target_os = "macos") {
                Shortcut::new(Some(Modifiers::SUPER), Code::KeyP)
            } else {
                Shortcut::new(Some(Modifiers::CONTROL), Code::KeyP)
            };

            // registra o handler
            app.handle().plugin(
                tauri_plugin_global_shortcut::Builder::new()
                .with_handler(move |_app, shortcut, event| {
                    if shortcut == &ctrl_n_shortcut {
                    if let ShortcutState::Pressed = event.state() {
                        let window = _app.get_webview_window("main").unwrap();

                        if window.is_minimized().unwrap() {
                        window.unminimize().unwrap();
                        window.show().unwrap();
                        window.set_focus().unwrap();
                        } else {
                        window.minimize().unwrap();
                        }
                    }
                    }

                    if shortcut == &ctrl_p_shortcut {
                    if let ShortcutState::Pressed = event.state() {
                        let window = _app.get_webview_window("main").unwrap();
                        
                        // Só dispara evento se a janela estiver visível e focada
                        if window.is_visible().unwrap_or(false) && 
                           !window.is_minimized().unwrap_or(true) &&
                           window.is_focused().unwrap_or(false) {
                        _app.emit("open-password-modal", ()).unwrap();
                        }
                    }
                    }
                })
                .build(),
            )?;

            // Registra os atalhos
            app.global_shortcut().register(ctrl_n_shortcut)?;
            app.global_shortcut().register(ctrl_p_shortcut)?;
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
