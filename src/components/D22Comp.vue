<template>
  <h1>hello,this is D22Comp</h1>
</template>
<script setup lang="ts">
import { inject } from 'vue';
import { KEY } from '@/composables/useType';

const v = inject(KEY) as string;
console.log(v);


</script>
