<template>
  <div class="mt-6 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <BaseCard link="https://github.com/posva/unplugin-vue-router" title="File-Based Routing" color="#22C55E">
      <template #icon>
        <Icon icon="devicon-plain:reactrouter" class="text-4xl text-white group-hover:text-[#22C55E]" />
      </template>
      <template #default>
        Each route in your application corresponds to a specific file or folder, simplifying route management and
        improving
        project organization.
      </template>
    </BaseCard>

    <BaseCard link="https://www.typescriptlang.org" title="TypeScript" icon="akar-icons:typescript-fill" color="#3278C6">
      <template #icon>
        <Icon icon="akar-icons:typescript-fill" class="text-4xl text-white group-hover:text-[#3278C6]" />
      </template>
      <template #default>
        TypeScript is a statically-typed superset of JavaScript that enhances code quality, robustness, readability
        and development efficiency.
      </template>
    </BaseCard>

    <BaseCard link="https://eslint.org" title="Eslint" color="#4B32C3">
      <template #icon>
        <Icon icon="simple-icons:eslint" class="text-4xl text-white group-hover:text-[#4B32C3]" />
      </template>
      <template #default>
        ESLint is a code analysis tool that enforces coding standards and detects errors in JavaScript projects,
        ensuring code quality and consistency.
      </template>
    </BaseCard>

    <BaseCard link="https://pinia.vuejs.org" title="Pinia" color="#FFD859">
      <template #icon>
        <Icon icon="emojione-monotone:pineapple" class="text-4xl text-white group-hover:text-[#FFD859]" />
      </template>
      <template #default>
        Pinia is a state management library for Vue apps. It provides an efficient way to manage
        app state, making it easier to build robust and maintainable Vue apps.
      </template>
    </BaseCard>

    <BaseCard link="https://github.com/dishait/vite-plugin-vue-meta-layouts" title="Layouts" color="#ff0000">
      <template #icon>
        <Icon
          icon="streamline:interface-layout-10-column-layout-layouts-right-sidebar"
          class="text-4xl text-white group-hover:text-[#ff0000]"
        />
      </template>
      <template #default>
        Router based layout for Vue 3 applications. Layouts are stored in the <span class="font-bold">layouts</span>
        folder by default and can be referenced with the <span class="font-bold">yaml</span> syntax in the route
        block.
      </template>
    </BaseCard>

    <BaseCard link="https://github.com/webfansplz/vite-plugin-vue-devtools" title="Vite DevTools" color="#27BAC9">
      <template #icon>
        <Icon icon="arcticons:google-webview-devtools" class="text-4xl text-white group-hover:text-[#27BAC9]" />
      </template>
      <template #default>
        Vite devtools gives you insights and transparency about your Vue App including features such as real time
        insights, tailor-made documentations and many more.
      </template>
    </BaseCard>

    <BaseCard link="https://vitest.dev/" title="Vitest" color="#CACB29">
      <template #icon>
        <Icon icon="simple-icons:vitest" class="text-4xl text-white group-hover:text-[#CACB29]" />
      </template>
      <template #default>
        Vitest is a modern unit testing framework for Vite based applications. Vitest provides features to
        seamlessly
        test your Vue applications with ease.
      </template>
    </BaseCard>

    <BaseCard link="https://icones.netlify.app" title="Icons" color="#FFA500">
      <template #icon>
        <Icon icon="mdi:fire" class="text-4xl text-white group-hover:text-[#FFA500]" />
      </template>
      <template #default>
        Use any icon in your Vue application from your favourite icon set from the Icones library which houses over
        100K+ icons and are free to use.
      </template>
    </BaseCard>

    <BaseCard link="https://github.com/unplugin/unplugin-vue-components" title="On Demand Imports" color="#27BAC9">
      <template #icon>
        <Icon icon="ph:gear" class="text-4xl text-white group-hover:text-[#27BAC9]" />
      </template>
      <template #default>
        Boost your productivity with auto imports. Automatic imports for
        your Vue <a href="https://github.com/unplugin/unplugin-vue-components" target="_blank"><span
          class="underline text-white"
        >components</span></a>, composables, stores, utilities, and <a
          href="https://github.com/antfu/unplugin-auto-import" target="_blank"
        ><span class="underline text-white">Vue
          APIs</span></a>, in your Vue application.
      </template>
    </BaseCard>

    <BaseCard link="https://tailwindcss.com/" title="TailwindCss" color="#1AB4B9">
      <template #icon>
        <Icon icon="simple-icons:tailwindcss" class="text-4xl text-white group-hover:text-[#1AB4B9]" />
      </template>
      <template #default>
        Tailwind CSS is a popular utility-first CSS framework that simplifies UI development by providing a set of
        pre-defined, atomic CSS classes.
      </template>
    </BaseCard>

    <BaseCard link="https://github.com/antfu/ni" title="Ni" color="#E3B341">
      <template #icon>
        <Icon icon="clarity:lightbulb-solid" class="text-4xl text-white group-hover:text-[#E3B341]" />
      </template>
      <template #default>
        Ni is a package that enables you to use the right package manager for your project. It supports various package
        managers such as NPM, Yarn, Pnpm and Bun.
      </template>
    </BaseCard>

    <BaseCard link="https://vueuse.org/" title="Vueuse" color="#41B883">
      <template #icon>
        <Icon icon="logos:vueuse" class="text-4xl text-white group-hover:text-[#41B883]" />
      </template>
      <template #default>
        Vueuse is a collection of essential Vue 3 composition utilities based on the Composition API that simplifies
        UI
        development and logic reuse.
      </template>
    </BaseCard>
  </div>
</template>
