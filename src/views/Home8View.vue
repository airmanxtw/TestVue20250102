<template>
  <div v-html="htmlContent"></div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const userInput = "<img src='non_exist.xxx' onerror=[1,2,3,4,5,6,7,8,9,0].map(function(v){console.log(v);alert('XSS')})>";
const htmlContent = ref(userInput);
</script>
