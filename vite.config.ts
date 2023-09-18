import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import MetaLayouts from 'vite-plugin-vue-meta-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    vueJsx(),
    MetaLayouts({
      importMode: 'async',
    }),
    VueDevTools(),
    AutoImport({
      dts: true,
      dirs: ['./src/composables/**', './src/stores/**', './src/utils/**'],
      imports: [
        VueRouterAutoImports,
        'vue',
        '@vueuse/core',
        'vitest',
        {
          'vue-router/auto': ['useLink', 'useRoute'],
          'pinia': [
            'defineStore',
            'storeToRefs',
          ],
        },
      ],
      include: [
        /\.[tj]sx?$/,
        /\.vue$/, /\.vue\?vue/,
        /\.md$/,
      ],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    Components({
      dts: true,
      resolvers: [
        (componentName) => {
          if (componentName.startsWith('Icon'))
            return { name: componentName, from: '@iconify/vue' }
        },
      ],
      types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView'],
      }],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
