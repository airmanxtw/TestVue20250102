<template>
  <div @click="play = true">
    <Home15Btn :play @done="play = false" />
    <!-- <Home15Btn :play :done /> -->
     <hr/>

  </div>
  <Home15Btn2 @click.prevent="alertMe"/>

</template>
<script setup lang="ts">
import Home15Btn from '@/components/Home15/Home15Btn.vue';
import Home15Btn2 from '@/components/Home15/Home15Btn2.vue';
import { ref } from 'vue';
const play = ref(false);
const done = () => {
  play.value = false;
}

const alertMe=(e:unknown)=>{
  console.log(e);
  debugger;
  alert('alert');
}
</script>
