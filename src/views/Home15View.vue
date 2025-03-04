<template>
  <div @click="play = true">
    <Home15Btn :play @done="play = false" />
    <!-- <Home15Btn :play :done /> -->
  </div>

</template>
<script setup lang="ts">
import Home15Btn from '@/components/Home15/Home15Btn.vue';
import { ref } from 'vue';
const play = ref(false);
const done = () => {
  play.value = false;
}
</script>
