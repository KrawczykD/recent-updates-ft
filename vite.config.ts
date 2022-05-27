import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import postcss from 'rollup-plugin-postcss';
const pkgjson = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['vue', '@BookingOnline/vue3-vite-component-library-template'],
      output: {
        entryFileNames: `[name].${pkgjson.version}.min.js`,
        chunkFileNames: `[name].${pkgjson.version}.min.js`,
        assetFileNames: `[name].${pkgjson.version}.min.[ext]`,
        format: 'umd',
        globals: {
          vue: 'Vue',
          '@BookingOnline/vue3-vite-component-library-template': 'vue3vitecomponentlibrarytemplate'
        }
      }
    }
  },
  // resolve: {
  //   // comment out aliases for build in ve and library to vendor file
  //   alias: {
  //     vue: 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.31/vue.runtime.esm-browser.prod.min.js',
  //     '@BookingOnline/vue3-vite-component-library-template':
  //       'https://bouncycastlenetwork-res.cloudinary.com/raw/upload/Platform/libraries/bo-vue3-vite-component-library/vue3vitecomponentlibrarytemplate.externalvue.0.0.7.es.js'
  //   }
  // },
  plugins: [
    vue(),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      compositionOnly: true,
      defaultSFCLang: 'json',
      include: path.resolve(__dirname, './locales/**')
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-i18n', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true, // Default `false`
        filepath: 'src/.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: 'readonly' // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    })
    // this plugin externalize css but can not include in to html / that needs to be fix
    //postcss({ extract: true })
  ]
});
