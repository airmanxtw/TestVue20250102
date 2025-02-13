<template>
  {{ uuid }}
  <!-- <div v-for="n in 10" :key="n">{{ n }}</div> -->
  <button @click="addItems">add</button>
  <div v-for="(item) in items1" :key="item">{{ `${item}` }}</div>
  <HComponents3 />
  <input type="radio" value="r1" name="g1" @change="clickRadio" />
  <input type="radio" value="r2" name="g1" @change="clickRadio" />
  <!-- <div v-for="(value, key) in item2" :key="key">{{ `key:${key},value:${value}` }}</div>
  <div v-for="(item, index) in items3" :key="index">{{ `words:${item.words},length:${item.length}` }}</div> -->
</template>
<script setup lang="ts">
import { uid } from 'uid';
import { ref } from 'vue';
import HComponents3 from '@/components/HComponents3.vue';
const uuid = ref(uid());

const clickRadio=(e:Event)=>{
  debugger;
  console.log(e);
}

const items1 = ref<string[]>(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]);
const addItems = () => {
  //items1.value.unshift(uid());
  items1.value = [uid(), ...items1.value];

};
const item2 = ref<Doc2>({ words: "hello", length: 100 });
const items3 = ref<Doc2[]>([
  { words: "hello", length: 100 },
  { words: "world", length: 200 },
]);
</script>
