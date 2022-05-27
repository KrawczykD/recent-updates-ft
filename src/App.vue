<template>
  <Header class="bg-bo-blue dark:bg-bo-black" v-on:buttonClicked="buttonClicked" v-bind:buttonsList="buttonsList"></Header>
  <Main class="p-4 flex-grow"
    ><p class="text-white break-words">Token: {{ token }}</p>
    >
  </Main>
  <Footer class="bg-bo-blue dark:bg-bo-black" v-bind:itemsList="itemsList"> </Footer>
</template>

<script setup lang="ts">
import Footer from './components/Footer/Footer.vue';
import Header from './components/Header/Header.vue';
import Main from './components/Main/Main.vue';
import { toggleDark, isDark } from './composables/dark';
import IFooterItem from './interfaces/FooterItem/FooterItem';
import IHeaderItem from './interfaces/HeaderItem/HeaderItem';

import FetchApi from './services/api/api';
import { setCountryCodeFromUrl, getCountryCode } from './services/urlParameters/urlParameters';

import FOOTER_ITEMS from './enums/FooterItem/FooterItem';
import HEADER_BUTTONS from './enums/HeaderItem/HeaderItem';
import FONT_AWSOME_ICONS from './enums/FaIcons/FaIcons';

import VERSION from './version';
import { IAuthentication, IVersion } from './interfaces/api/api';
// set up countrycode from url ?countrycode=XX GB is default
setCountryCodeFromUrl();

const credential = {
  userName: 'apiadmin@kevinwsplus.bouncycastlenetwork.com',
  password: 'pH6bE190iPS!5cKD'
};

onMounted(() => {
  // obtain token only if global token variable is empty
  if (token.value == '') {
    FetchApi.getAuthentication(credential.userName, credential.password).then((res: IAuthentication) => {
      token.value = res.data.token;
      console.log(token.value);
    });
  }

  FetchApi.getApiInfo().then((res: IVersion) => {
    itemsList.find((item) => {
      if (item.name == FOOTER_ITEMS.API) {
        item.title = res.data.name + ' v' + res.data.version;
        item.description = res.data.releasedOn + ' ' + res.data.branch;
      }
    });
  });
});

const token = ref<string>(window.bopr_api_token);
const isFooterExpand = ref(false);

const buttonClicked = (button: IHeaderItem, index: number) => {
  if (button.name == HEADER_BUTTONS.THEME) {
    toggleDark(!isDark.value);
    if (isDark.value) {
      button.slot = FONT_AWSOME_ICONS.FA_MOON_2X;
    } else {
      button.slot = FONT_AWSOME_ICONS.FA_SUN_2X;
    }
  } else {
    console.log(button, 'clicked');
  }
};

const itemsList: Array<IFooterItem> = reactive([
  { name: FOOTER_ITEMS.FT, title: VERSION.name + ' v' + VERSION.version, description: VERSION.releasedOn + ' ' + VERSION.branch, alwaysVisible: true },
  {
    name: FOOTER_ITEMS.API,
    title: '',
    description: '',
    alwaysVisible: false
  },
  { name: FOOTER_ITEMS.KB, title: 'KB v0.1.2', description: 'Ft (Staging-e66851d.Staging) Wed, 02 Mar 2022 16:50:47 GMT', alwaysVisible: false },
  { name: FOOTER_ITEMS.COMPANY, title: 'Booking Online Ltd 2022', description: '', alwaysVisible: true }
]);

const buttonsList: Array<IHeaderItem> = reactive([
  { name: HEADER_BUTTONS.USER, slot: FONT_AWSOME_ICONS.FA_USER_2X, alwaysVisible: false },
  { name: HEADER_BUTTONS.CLOCK, slot: FONT_AWSOME_ICONS.FA_CLOCK_2X, alwaysVisible: false },
  { name: HEADER_BUTTONS.CALENDAR, slot: FONT_AWSOME_ICONS.FA_CALENDAR_2X, alwaysVisible: false },
  { name: HEADER_BUTTONS.TRUCK, slot: FONT_AWSOME_ICONS.FA_TRUCK_2X, alwaysVisible: false },
  { name: HEADER_BUTTONS.THEME, slot: FONT_AWSOME_ICONS.FA_SUN_2X, alwaysVisible: true }
]);
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
</style>

<style>
#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
