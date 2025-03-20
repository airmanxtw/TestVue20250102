<template>
  <div>
    <span style="padding:0px 5px 0px 5px ;margin-right: 6px;cursor: pointer;border-radius:3px"
      @click="() => currentPageIndex = i" :class="{ 'currentPage': i == pageIndex, 'notCurrentPage': i != pageIndex }"
      v-for="i in pageEnd" :key="i">
      {{ i }}
    </span>
    {{ A?.PageIndex }}
    <button @click="A?.addPageIndex">add2</button>
  </div>
</template>
<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue';
import { PAGEKEY } from '@/composables/useType';
const props = defineProps<{
  pageIndex: number;
  pageSize: number;
  total: number;
}>();
const emit = defineEmits<{
  (e: 'update:pageIndex', value: number): void
}>();

const pageEnd = computed(() => Math.ceil(props.total / props.pageSize));

const currentPageIndex = ref(props.pageIndex);

watch(() => currentPageIndex.value, (newVal) => {
  emit('update:pageIndex', newVal)
})

const A = inject(PAGEKEY);



</script>

<style scoped>
.currentPage {
  background-color: blue;
  color: white;
}

.notCurrentPage {
  background-color: white;
  color: black
}
</style>
