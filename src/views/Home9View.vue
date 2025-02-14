<template>
  {{ uuid }}
  <!-- <div v-for="n in 10" :key="n">{{ n }}</div> -->
  <button @click="addItems">add</button>
  <div v-for="(item) in items1" :key="item">{{ `${item}` }}</div>
  <HComponents3 />
  <div>
    {{ radioValue }}
  </div>

  <select v-model="radioValue" multiple>
    <option disabled value="">Please select one</option>
    <template v-for="(item) in item4" :key="item.key">
      <option :value="item"> {{ item.value }}</option>
    </template>
  </select>

  <input type="radio" value="1" v-model="ivalue">


  <!-- <div v-for="(value, key) in item2" :key="key">{{ `key:${key},value:${value}` }}</div>
  <div v-for="(item, index) in items3" :key="index">{{ `words:${item.words},length:${item.length}` }}</div> -->
</template>
<script setup lang="ts">
import { uid } from 'uid';
import { ref } from 'vue';
import HComponents3 from '@/components/HComponents3.vue';
const uuid = ref(uid());

const radioValue = ref<KeyValue[]>([]);
const ivalue = ref<string>("");
const ivalue0 = ref<string>("init");

const clickRadio = (e: Event) => {
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

const item4 = ref<KeyValue[]>([
  { key: "a1", value: "this is book" },
  { key: "a2", value: "this is pen" },
  { key: "a3", value: "this is pencil" },
  { key: "a4", value: "this is eraser" },
]);
</script>
