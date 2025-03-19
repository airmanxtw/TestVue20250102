<template>
  <my-table :model-value="modelValue" :page-index="pageIndex" :page-size="pageSize" :total="total"
    @update:page-index="(i: number) => emit('update:pageIndex', i)">
  </my-table>

</template>
<script setup lang="ts">
import MyTable from '@/components/Home21/MyTable.vue';
defineProps<{
  modelValue: Post[],
  pageIndex: number;
  pageSize: number;
  total: number;
}>();
const emit = defineEmits<{
  (e: 'update:pageIndex', value: number): void
}>();

</script>
