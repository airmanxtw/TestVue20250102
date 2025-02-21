<template>
  <span ref="spanTemplate" id="cp">{{ counter }}</span>
  <button @click="addCounter">+</button>
  <component :is="counter % 2 == 0 ? CusCom1 : CusCom2" :msg="counter" />
  <CusCom3 v-if="counter >= 5" />


  <table>
    <Cuscom4></Cuscom4>
  </table>

  <RouterLink to="/home11">Home11</RouterLink>
</template>
<script setup lang="ts">

import { CusCom1, CusCom2 } from "@/components/Demo/"


import {
  ref,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  nextTick,
  defineAsyncComponent
}
  from 'vue'

//const CusCom3 = defineAsyncComponent(() => import('@/components/Demo/CusCom3.vue'))
import CusCom3 from "@/components/Demo/CusCom3.vue";
import Cuscom4 from "@/components/Demo/CusCom4.vue";


const counter = ref(0);
const addCounter = () => {
  nextTick(() => {
    console.log("tick!");
  })
  counter.value++;
}

const spanTemplate = ref<HTMLSpanElement | null>(null);

onBeforeMount(() => {
  console.log(`counter:${counter.value}`);
  console.log(`cp:${document.getElementById('cp')}`);
  console.log('onBeforeMount')
})

const timeid = ref(0);
onMounted(() => {
  console.log(`counter:${counter.value}`);
  console.log(`cp:${(document.getElementById('cp') as HTMLSpanElement).innerText}`);
  console.log(`cp:${spanTemplate.value?.innerText}`);
  console.log('onMounted')

  timeid.value = setInterval(() => {
    console.log("check server state")
  }, 1000);


})

onBeforeUpdate(() => {
  console.log("onBeforeUpdate")
})

onUpdated(() => {
  console.log("onUpdated")
})

onBeforeUnmount(() => {
  console.log(`cp:${(document.getElementById('cp') as HTMLSpanElement).innerText}`);
  console.log("onBeforeUnmount")
  clearInterval(timeid.value);
})

onUnmounted(() => {
  console.log(`cp:${document.getElementById('cp')}`);
  console.log("onUnmounted")
})



</script>
