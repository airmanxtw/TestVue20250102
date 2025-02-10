<template>
  <div v-html="htmlContent"></div>
  <div @click.capture.once="console.log(' this is div')">
    <button @click="console.log(' this is button')">click</button>
    <input @keypress="console.log(' this is input')" />

  </div>

  <div v-for="(item) in items1" :key="item">{{ item }}</div>
  <div v-for="(value,key) in item2" :key="key">{{ `key:${key},value:${value}` }}</div>
  <div v-for="(item) in items3" :key="item.words">{{ `words:${item.words},length:${item.length}` }}</div>

</template>
<script setup lang="ts">
import {uid} from 'uid';
import { ref } from 'vue'

const userInput = "";
const htmlContent = ref(userInput);
const items1=ref<string[]>(["1","2","3","4","5","6","7","8","9","10"]);
const item2=ref<Doc2>({words:"hello",length:100});
const items3=ref<Doc2[]>([{words:"hello",length:100},{words:"world",length:200}]);



</script>
