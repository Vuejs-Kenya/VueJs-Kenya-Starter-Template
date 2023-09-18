# VueJs Kenya Starter Template

A Vue.js Kenya starter template built with TypeScript and packed with powerful features to kickstart your web application development.

## Features

- 📁 **File Based Routing**: Each route in your application corresponds to a specific file or folder, simplifying route management and improving project organization.

- 🦾  **TypeScript**: Benefit from strong typing and enhanced developer productivity.
- 🔍 **ESLint**: Maintain code quality and consistency with ESLint for TypeScript.
- 🍍 **Pinia**: A state management solution for Vue.js.
- 🪟 **Layouts**: Pre-configured layouts for consistent page structure.
-🛠️ **Vite Devtools**: Boost your development experience with Vite's devtool for inspecting and debugging your Vue application.
- ⚡️ **Vitest**: A fast modern testing framework for Vue 3.
- 🔥 **Icons**: Ready-to-use icons for your application.
- 📦 **On Demand Imports**: Optimize performance by loading components on demand.
- 🎨 **Tailwind CSS**: Utility-first CSS framework for efficient styling.
- 🧰 **Ni**: Ni is a package that enables you to use the right package manager for your project..
- 🧩 **VueUse**: A collection of Vue 3 composable functions.


## Pre-packed

### UI Frameworks

- [TailwindCss](https://tailwindcss.com) - Utility-first CSS framework for efficient styling.

### Icons

- [Iconify](https://iconify.design) - Use your favourite icons from any icon sets [🔍Icônes](https://icones.netlify.app/)

### Plugins

- [Vue Router](https://github.com/vuejs/router)
  - [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) - file based routing
  - [`vite-plugin-vue-meta-layouts`](https://github.com/dishait/vite-plugin-vue-meta-layouts) - layouts for pages
- [Pinia](https://pinia.vuejs.org) - Intuitive, type safe, light and flexible state management library for Vue applications.
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - Components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition APIs and third party APIs without importing.

### Coding Style

- Use Composition API with `<script setup>` SFC syntax
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes and no semi-colons.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Vite DevTool](https://github.com/webfansplz/vite-plugin-vue-devtools)
- [Vitest](https://github.com/vitest-dev/vitest) - A fast unit testing framework powered by Vite.
- [Pnpm](https://pnpm.js.org/) - A fast and efficient disk space package manager.
- [Ni](https://github.com/antfu/ni) - A package that enables you to use the right package manager for your project.
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up your Vite server automatically.
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support.
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete.
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


## Get started

You can create a repository with this template [here](https://github.com/Vuejs-Kenya/VueJs-Kenya-Starter-Template/generate)

or if you prefer to do it manually with a clean git history you can do as demonstrated below:

```bash
npx degit https://github.com/Vuejs-Kenya/VueJs-Kenya-Starter-Template vuejs-kenya-starter-template

cd vuejs-kenya-starter-template

pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

### Project setup

```bash
pnpm i
```

### Development

```bash
pnpm run dev
```

### Build

```bash
pnpm build
```

Builds your Vue application for production to the `dist` folder.

Enjoy ✨
