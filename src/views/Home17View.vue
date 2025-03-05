<template>
  <HComponents4 />
  <input v-for="(item) in data" :key="item.key" v-model="item.value" />
  {{ data }}
  <hr />
  <MutiInput v-model="data2" :index="[]" />
  {{ data2 }}
</template>
<script setup lang="ts">
import HComponents4 from '@/components/HComponents4.vue';
import MutiInput from '@/components/MutiInput.vue';
import { ref } from 'vue';

const data = ref<KeyValue[]>([{ key: 'one', value: '2' }, { key: 'two', value: '4' }, { key: 'three', value: '6' }]);

const data2 = ref(['hello1', 'hell2', 'hello3',[ 'hello4', 'hello5', 'hello6']]);


</script>
