<template>
  <HComponents4 />
  <input v-for="(item) in data" :key="item.key" v-model="item.value" />
  {{ data }}
</template>
<script setup lang="ts">
import HComponents4 from '@/components/HComponents4.vue';
import { ref } from 'vue';
const data=ref<KeyValue[]>([{key:'one',value:'2'}, {key:'two',value:'4'},{key:'three',value:'6'}]);


</script>
