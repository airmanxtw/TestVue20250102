<template>
  <div>
    i1 input: {{ i1Value }}<br />
    <input id="i1" type="text" v-bind:value="i1Value" v-on:change="i1Input">
  </div>
  <div>
    i2 input: {{ i2Value }}<br />
    <input id="i2" type="text" v-model.lazy="i2Value">
  </div>
  <div>
    r1 radio: {{ r1Value }}<br />
    <template v-for="item in r1Data" :key="item">
      <input type="radio" :value="item" :checked="r1Checked(item)" @input="r1Input">{{ item }}
    </template>
  </div>

  <div>
    r2 radio: {{ r2Value }}<br />
    <template v-for="item in r2Data" :key="item">
      <input type="radio" :value="item" v-model="r2Value">{{ item }}
    </template>
  </div>

  <div>
    r3 radio: {{ r3Value }}<br />
    <template v-for="item in r3Data" :key="item.key">
      <input type="radio" :value="item" :checked="r3Checked(item)" @input="r3Input">{{ item.value }}
    </template>
  </div>

  <div>
    r4 radio: {{ r4Value }}<br />
    <template v-for="item in r4Data" :key="item.key">
      <input type="radio" :value="item" v-model="r4Value">{{ item.value }}
    </template>
  </div>

  <div>
    c5 radio: {{ c5Value }}<br />
    <template v-for="item in c5Data" :key="item.key">
      <input type="checkbox" :value="item" v-model="c5Value">{{ item.value }}
    </template>
  </div>

  <div style="font-size: 50px;">
    ☹哭
  </div>






</template>
<script setup lang="ts">
import { ref } from 'vue';

const i1Value = ref<string>("");
const i1Input = (e: Event) => {
  i1Value.value = (e.target as HTMLInputElement).value;
}

const i2Value = ref<string>("");

const r1Data = ref<string[]>(["男", "女"]);
const r1Value = ref<string>("");
const r1Checked = (v: string) => {
  return r1Value.value == v;
}
const r1Input = (e: Event) => {
  r1Value.value = (e.target as HTMLInputElement).value;
}

const r2Data = ref<string[]>(["男", "女"]);
const r2Value = ref<string>("");

const r3Data = ref<KeyValue[]>([{ key: "M", value: "男" }, { key: "F", value: "女" }]);
const r3Value = ref<KeyValue | null>(null);
const r3Input = (e: Event) => {
  r3Value.value = (e.target as HTMLInputElement).value as unknown as KeyValue;
}

const r3Checked = (v: KeyValue) => {
  return r3Value.value?.key === v.key;
}

const r4Data = ref<KeyValue[]>([{ key: "M", value: "男" }, { key: "F", value: "女" }]);
const r4Value = ref<KeyValue | null>(null);

const c5Data = ref<KeyValue[]>([{ key: "TP", value: "台北" }, { key: "TN", value: "台南" }]);
const c5Value = ref<KeyValue[]>([]);






</script>
