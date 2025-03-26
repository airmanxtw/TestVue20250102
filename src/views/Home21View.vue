<template>
  <my-data-table :model-value="pageData" v-model:page-index="pageIndex" :pageSize :total></my-data-table>
  <v-btn @click="loadData">
    <v-icon>mdi-account</v-icon>
    Load Data
  </v-btn>
</template>
<script setup lang="ts">
import MyDataTable from '@/components/Home21/MyDataTable.vue';
import { computed, ref } from 'vue';


import axios from 'axios';
import type { AxiosError } from 'axios';

import { ofetch } from "ofetch";
import type { FetchError } from "ofetch";


const posts = ref<Post[]>([]);


const pageIndex = ref(1);
const pageSize = ref(5);
const total = computed(() => posts.value.length);
const pageData = computed(() => posts.value.slice((pageIndex.value - 1) * pageSize.value, pageIndex.value * pageSize.value));

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => posts.value = json)




const loadData = async () => {
  try {
    const data = ofetch.raw<Post[]>('https://jsonplaceholder.typicode.com/postsx', { retry: 3, retryDelay: 1000, method: 'GET' });
    console.log(data);
    debugger;
  }
  catch (e) {
    const E = e as FetchError;
    throw new Error(`發生錯誤:${E.message},status:${E.response?.status}`);
  }





  // axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => {
  //     console.log(response);
  //     debugger;
  //   })
  //   .catch((error: AxiosError) => {
  //     console.log(error);
  //     debugger;
  //   });

  // //console.log(res);
  // debugger;
}


// try {
//   const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/postsx')

//   //const res = await fetch('https://jsonplaceholder.typicode.com/postsx');
//   console.log(res);
//   debugger;

// }
// catch (e) {
//   console.log(e);
//   throw new Error('Error fetching data');
// }






</script>
