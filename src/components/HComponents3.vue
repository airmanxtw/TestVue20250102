<template>
  <node />
</template>
<script setup lang="ts">
import { ref, h } from 'vue';
const data = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const node = () => [...data.value.filter(v => v % 2 == 0).map(v => h("div", { innerHTML: v }))];
</script>
