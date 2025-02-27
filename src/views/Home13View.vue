<template>
  width:<input v-model="width" type="number" />
  <!-- <component :is="width > 120 ? Home13Checkbox : Home13Btn" fill="#ff0000" :width="width" @click="checkboxClick">

  </component> -->
  <h1>hello you are sgv checkbox</h1>
  <h2>thi is he</h2>
  <!-- <img src="https://picsum.photos/200/300" alt="random" /> -->
  <home13-checkbox v-if="width > 120" fill="#ff0000" :width @click="checkboxClick">
    <h1>hello you are sgv checkbox</h1>
    <h2>thi is he</h2>
    <img src="https://picsum.photos/200/300" alt="random" />
  </home13-checkbox>
  <home13-btn v-else></home13-btn>
  <br />
  <svg-checkbox :width="50"  fill="#ffffff" :checked="myCheck" @click="(c) => myCheck = c">

  </svg-checkbox>
  {{ myCheck }}
</template>
<script setup lang="ts">
// import Home13Checkbox from '@/components/Home13/Home13Checkbox.vue';
// import Home13Btn from '@/components/Home13/Home13Btn.vue';
import { Home13Btn, Home13Checkbox } from "@/components/Home13";
import SvgCheckbox from "@/components/Home13/SvgCheckbox.vue";
import { ref } from 'vue';
const width = ref(120);

const myCheck = ref(false);

const checkboxClick = (val: string) => {
  alert('checkbox clicked:' + val);
};


</script>
