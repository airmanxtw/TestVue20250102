<template>
  <Home15Btn22 v-model="model"/>
  {{ model }}
</template>
<script setup lang="ts">
import Home15Btn22 from '@/components/Home15/Home15Btn22.vue';
const model=defineModel();
</script>
