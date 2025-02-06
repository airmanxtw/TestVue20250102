<template>
  <h1 v-if="hvalue == 1">{{ content }}</h1>
  <h2 v-else-if="hvalue == 2">{{ content }}</h2>
  <h3 v-else-if="hvalue == 3">{{ content }}</h3>
  <h4 v-else-if="hvalue == 4">{{ content }}</h4>
  <h5 v-else-if="hvalue == 5">{{ content }}</h5>
  <h6 v-else>{{ content }}</h6>
</template>
<script setup lang="ts">
defineProps<{ hvalue: number, content: string }>();
</script>
