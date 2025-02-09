<template>
  <div v-html="htmlContent"></div>
  <div @click.capture.once="console.log(' this is div')">
    <button @click="console.log(' this is button')">click</button>
    <input @keypress="console.log(' this is input')" />
  </div>

</template>
<script setup lang="ts">
import { ref } from 'vue'

const userInput = "";
const htmlContent = ref(userInput);


</script>
