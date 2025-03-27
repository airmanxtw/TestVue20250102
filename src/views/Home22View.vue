<template>
  result: {{ result }}
  <v-divider></v-divider>
  <!-- <v-btn color="primary" @click="async () => { result = await addV4(-1, 1) }">計算</v-btn> -->
  <v-btn color="primary" @click="result = add(-1, 2)">計算</v-btn>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { ref } from 'vue';
import axios from 'axios';

const result = ref<number>(0);
type ErrorObj = {
  code:string
  message: string
  a: number
  b: number
}

const add = (a: number, b: number) => {
  if (a > 0 && b > 0) {
    return a + b;
  }
  else {
    const obj = {code:'001', message: 'a或b不可小於0', a, b } as ErrorObj;
    throw new Error(JSON.stringify(obj));
  }
}

const addAsync = async (a: number, b: number) => {
  if (a > 0 && b > 0) {
    return a + b;
  }
  else {
    throw new Error('a或b不可小於0');
  }
}

const addV2 = (a: number, b: number) => {
  try {
    return add(a, b);
  }
  catch (e) {
    const e2 = e as Error;
    alert(e2.message);
  }
  finally {
    return -999999;
  }
}

const addV3 = (a: number, b: number) => {
  addAsync(a, b).then(r => {
    result.value = r;
  }).catch(e => {
    const e2 = e as Error;
    alert(e2.message);
  });
}

const addV4 = async (a: number, b: number) => {
  return await addAsync(a, b);
}

// onMounted(async () => {
//   const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

// });



</script>
