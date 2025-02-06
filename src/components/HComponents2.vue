<template>
  <node />
</template>
<script setup lang="ts">
import { h } from 'vue';
const props = defineProps<{ hvalue: number, content: string }>();
const node = h(`h${props.hvalue}`, { innerHTML: props.content });
</script>
