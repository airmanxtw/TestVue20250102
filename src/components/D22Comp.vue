<template>
  <h1 >hello,this is D22Comp</h1>
</template>
<script setup lang="ts">
import {inject} from 'vue';
import {useType} from '@/composables/useType';
const {key}=useType();
const v=inject(key) as string;
console.log(v);
debugger;

</script>
