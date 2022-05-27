import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
// import './styles/output.css';

const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../locales/**.json')).map(([key, value]) => {
    const json = key.endsWith('.json');
    return [key.slice(-7, json ? -5 : -4), value.default];
  })
);

const i18n = createI18n({
  locale: 'en', // set locale
  legacy: false,
  //fallbackLocale: 'en', // set fallback locale
  globalInjection: true,
  messages // set locale messages
});

// createApp(App).use(i18n).mount('#app');
const app = createApp(App);

app.use(i18n);
app.mount('#app');
