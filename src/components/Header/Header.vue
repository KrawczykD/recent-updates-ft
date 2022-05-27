<template>
  <header class="p-4">
    <div class="flex justify-end gap-1">
      <div class="mr-auto">
        <Button v-on:click="buttonClicked('home-button')"><i class="fal fa-2x fa-home text-white"></i></Button>
      </div>
      <div class="flex flex-wrap justify-end gap-1">
        <Button
          :class="['sm:block', !isExpand && !button.alwaysVisible ? 'hidden' : '']"
          v-for="(button, index) in buttonsList"
          v-bind:key="index"
          v-html="button.slot"
          v-on:click="buttonClicked(button, index)"
        ></Button>
      </div>
      <div v-if="isExpandButtonVisible()" class="gap-1">
        <Button :class="[!isExpand ? 'block sm:hidden' : 'hidden']" v-on:click="toggleExpand(), buttonClicked('expand-button')"><i class="fas fa-2x fa-angle-double-up text-white"></i></Button>
        <Button :class="[isExpand ? 'block sm:hidden' : 'hidden']" v-on:click="toggleExpand(), buttonClicked('collpase-button')"><i class="fas fa-2x fa-angle-double-down text-white"></i></Button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from '../Button/Button.vue';
import IHeaderItem from '../../interfaces/HeaderItem/HeaderItem';
import { defineProps, PropType, defineEmits } from 'vue';

const props = defineProps({
  buttonsList: {
    type: Array as PropType<Array<IHeaderItem>>,
    default: [] as Array<IHeaderItem>
  }
});

const emits = defineEmits(['buttonClicked']);

const isExpand = ref(false);

const buttonClicked = (prop: IHeaderItem | string, index?: number) => {
  emits('buttonClicked', prop, index);
};

const isExpandButtonVisible = () => {
  let isVisible = false;
  let foundedIndex = props.buttonsList.findIndex((item) => item.alwaysVisible == false);
  if (foundedIndex != -1) {
    isVisible = true;
  }

  return isVisible;
};

const toggleExpand = () => {
  isExpand.value = !isExpand.value;
};
</script>

<style scoped>
/** All scoped css here */
</style>
