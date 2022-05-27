<script setup lang="ts">
import FooterItem from '../FooterItem/FooterItem.vue';
import IFooterItem from '../../interfaces/FooterItem/FooterItem';
import { defineProps, PropType } from 'vue';
defineProps({
  itemsList: {
    type: Array as PropType<Array<IFooterItem>>,
    default: [] as Array<IFooterItem>
  }
});

const isExpand = ref(false);

const toggleExpand = () => {
  isExpand.value = !isExpand.value;
};
</script>

<template>
  <footer v-on:click="toggleExpand" v-bind:class="['flex flex-row', isExpand ? 'flex-col' : '']">
    <FooterItem v-for="(item, index) in itemsList" v-bind:key="index" v-bind:class="[isExpand || item.alwaysVisible ? '' : 'hidden sm:block', 'flex-auto']">
      <p class="font-semibold">{{ item.title }}</p>
      <p v-if="isExpand">{{ item.description }}</p>
    </FooterItem>
  </footer>
</template>

<style scoped>
/** All scoped css here */
</style>
