<template>
  <my-data-table :model-value="pageData" v-model:page-index="pageIndex" :pageSize :total></my-data-table>
</template>
<script setup lang="ts">
import MyDataTable from '@/components/Home21/MyDataTable.vue';
import { computed, ref } from 'vue';

const posts = ref<Post[]>([]);


const pageIndex = ref(1);
const pageSize = ref(5);
const total = computed(() => posts.value.length);
const pageData = computed(() => posts.value.slice((pageIndex.value - 1) * pageSize.value, pageIndex.value * pageSize.value));

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => posts.value = json)



</script>
