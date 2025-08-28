# Fragile

Inspirado por Death Stranding, Fragile é um gerenciador de senhas desktop moderno construído com [Tauri](https://tauri.app/) e [React](https://react.dev), utilizando [TypeScript](https://www.typescriptlang.org/) e [Tailwind CSS](https://tailwindcss.com/) no front-end, e [Rust](https://www.rust-lang.org/) no back-end.

O projeto nasceu da necessidade de gerenciar as diferentes exigências de senha de cada site - alguns pedem números, outros símbolos especiais, alguns têm limite de caracteres - e da frustração de esquecer qual senha foi usada em cada lugar. Além de resolver esse problema comum, o Fragile serve como um projeto de aprendizado para explorar as capacidades do Rust e do Tauri no desenvolvimento de aplicações desktop nativas.

## Principais Tecnologias

- **Tauri**: Shell desktop leve e seguro
- **React + TypeScript**: UI reativa e tipada
- **Tailwind CSS**: Estilização utilitária e rápida
- **Lucide-React**: Ícones bonitos e personalizáveis
- **Rust**: Backend nativo, rápido e seguro

## Futuras Integrações

- [Shadcn/UI](https://ui.shadcn.com/): Componentes UI acessíveis e modernos
- [Zod](https://zod.dev/): Validação de dados
- [React Hook Form](https://react-hook-form.com/): Gerenciamento de formulários
- [@hookform/resolvers](https://react-hook-form.com/get-started#SchemaValidation): Integração de validação com Zod

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Rust](https://www.rust-lang.org/tools/install)
- [Git](https://git-scm.com/)

## Requisitos de Desenvolvimento

- [VS Code](https://code.visualstudio.com/) recomendado
- Extensões: [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode), [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Instalação

```bash
# Clone o repositório
git clone https://github.com/21lucasbarros/fragile.git
cd fragile

# Instale as dependências
npm install
```

## Como rodar

```bash
# Inicie o app em modo desenvolvimento
npm run tauri dev

# Build para produção
npm run tauri build
```

## Scripts Disponíveis

- `npm run tauri dev` - Inicia o desenvolvimento
- `npm run tauri build` - Build para produção
- `npm run dev` - Inicia apenas o frontend
- `npm run build` - Build do frontend
- `npm run lint` - Executa o linter
- `npm run type-check` - Verifica tipos TypeScript

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.
