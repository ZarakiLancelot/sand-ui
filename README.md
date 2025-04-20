# SAND‑UI

**Atomic‑design React UI component library** in TypeScript, powered by **styled‑components**, **PandaCSS** and **vanilla‑extract**, built with **Vite** and documented in **Storybook**.

---

## 🚀 Features

- **Atomic Design** structure: Atoms, Molecules, Organisms, Templates, Pages
- **CSS-in-JS & CSS-at-build**: styled‑components, PandaCSS & vanilla‑extract support
- **TypeScript-first**: strong typing and DX
- **Vite-powered**: ultra-fast dev server with HMR and optimized production builds
- **Storybook** documentation: interactive component playgrounds and docs

---

## 📦 Installation

```bash
npm install sand-ui
# or
yarn add sand-ui
```

**Peer dependencies** (install alongside):

- `react@^18.2.0`
- `react-dom@^18.2.0`
- `styled-components@^6.1.17`

---

## 🔧 Usage

```tsx
import React from 'react';
import { Button } from 'sand-ui';

export default function App() {
  return <Button variant="primary">Click me</Button>;
}
```

Check out all available components and props in Storybook.

---

## 🛠 Development

- **Run Storybook** (dev mode):

  ```bash
  npm run storybook
  ```

- **Build library**:

  ```bash
  npm run build
  ```

- **Build Storybook static**:

  ```bash
  npm run build-storybook
  ```

---

## 📁 Folder Structure

```plaintext
sand-ui/
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   ├── templates/
│   │   └── pages/
│   ├── styles/    # tokens, themes
│   └── index.ts   # central exports
├── storybook/
│   ├── main.ts
│   └── preview.ts
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Please follow [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for more information.
