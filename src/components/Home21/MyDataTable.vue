<template>
  <my-table :model-value="modelValue" :page-index="pageIndex" :page-size="pageSize" :total="total"
    @update:page-index="(i: number) => emit('update:pageIndex', i)">
    <my-pager :page-index="pageIndex" :page-size="pageSize" :total="total"
      @update:page-index="(i: number) => emit('update:pageIndex', i)"></my-pager>
  </my-table>
  <button @click="PageIndex++">add</button>
  <my-test v-if="pageIndex > 10"></my-test>
</template>
<script setup lang="ts">
import { provide, ref, defineAsyncComponent } from 'vue';
import MyTable from '@/components/Home21/MyTable.vue';
import MyPager from '@/components/Home21/MyPager.vue';
const MyTest = defineAsyncComponent(() =>
  import('@/components/Home21/MyTest.vue')
)

import { PAGEKEY } from '@/composables/useType';
defineProps<{
  modelValue: Post[],
  pageIndex: number;
  pageSize: number;
  total: number;
}>();
const emit = defineEmits<{
  (e: 'update:pageIndex', value: number): void
}>();

const PageIndex = ref(10);
const addPageIndex = () => {
  PageIndex.value++;
}

const A = {
  PageIndex,
  addPageIndex
}

provide(PAGEKEY, A);

</script>
