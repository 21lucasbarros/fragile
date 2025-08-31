import Overview from "@/components/overview";
import Sidebar from "@/components/side-bar";
import ModalPassword from "@/components/ui/modal-password";
import { useState } from "react";

interface DashboardProps {
  goToHome: () => void;
}

export type Page =
  | "overview"
  | "all-passwords"
  | "favorites"
  | "generator"
  | "security-check";

export default function Dashboard({ goToHome }: DashboardProps) {
  const [activePage, setActivePage] = useState<Page>("overview");

  return (
    <div className="flex h-screen w-full bg-[#1a1a1a] text-white">
      <Sidebar goToHome={goToHome} setActivePage={setActivePage} />
      <main className="flex-1 p-6">
        <header className="flex flex-row justify-between items-center">
          <h1 className="text-lg text-gray-300 uppercase tracking-wider">
            Dashboard
          </h1>
          <ModalPassword />
        </header>
        <section className="mt-6">
          {activePage === "overview" && <Overview />}
          {activePage === "all-passwords" && <p>🔑 All Passwords Content</p>}
          {activePage === "favorites" && <p>⭐ Favorites Content</p>}
          {activePage === "generator" && <p>⚡ Password Generator</p>}
          {activePage === "security-check" && <p>🛡️ Security Check</p>}
        </section>
      </main>
    </div>
  );
}
