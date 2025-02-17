<template>
  {{ r1 }}<br />
  <input ref="i1" type="radio" @change="radioChange" value="abc" :checked="r1Checked" />
  <!-- <input type="radio"  value="abc" v-model="r1" /> -->

  <hr />
  {{ selectR1 }}<br />
  <template v-for="(item, index) in dataR1" :key="index">
    <input type="radio" :value="item" @input="r1Change(item)" :checked="checkedR1(item)" />
    {{ item.value }}<br />
  </template>

  <input type="color" @change="b1Input">


  <!-- <template v-for="(item, index) in dataC1" :key="index">
    <input type="checkbox" :value="item" @change="c1Change" :checked="checkedC1(item)">
    {{ item }}-{{ checkedC1(item) }}<br />
    <br />
  </template> -->

  <!-- <template v-for="(item, index) in dataC1" :key="index">
    <input type="checkbox" :value="item" v-model="selectC1" />
    {{ item }}<br />
    <br />
  </template> -->





</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
const i1 = ref<null | HTMLInputElement>(null);
const r1 = ref("abc");
const r1Value = ref("abc");
const r1Checked = computed(() => r1?.value === r1Value.value);

const dataC1 = ref<string[]>(["種花", "種樹", "種草"]);
const selectC1 = ref<string[]>([]);

const checkedC1 = (v: string) => selectC1.value.includes(v);

const c1Change = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.checked) {
    selectC1.value = [...selectC1.value, target.value];
  } else {
    selectC1.value = selectC1.value.filter((v) => v !== target.value);
  }
};

const dataR1 = ref<KeyValue[]>([{ key: "M", value: "男" }, { key: "F", value: "女" }]);
const selectR1 = ref<KeyValue | null>(null);
const checkedR1 = (v: KeyValue) => selectR1.value === v;
const r1Change = (v: KeyValue) => {
  selectR1.value = v;
};


const radioChange = (e: Event) => {
  r1.value = (e.target as HTMLInputElement).value;
}

const b1Input = (e: Event) => {
  debugger;
  console.log(e);
}





</script>
