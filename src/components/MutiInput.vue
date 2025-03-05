<template>
  <ol>
    <li v-for="(item, index) in props.modelValue" :key="index">
      <input v-if="!Array.isArray(item)" :data-value="[...props.index,index]" :value="item" @input="(e) => updateItem(index, e.target as HTMLInputElement)" />
      <MutiInput v-else :model-value="item" :index="[...props.index,index]" />
    </li>
  </ol>

</template>
<script setup lang="ts">
import MutiInput from '@/components/MutiInput.vue';

const props = defineProps<{
  modelValue: (string | string[])[] | string[];
  index:number[];
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: (string | string[])[] | string[]): void;
}>();
import { List } from "immutable";
const updateItem = (index: number, input: HTMLInputElement) => {
  const test=`[${input.dataset.value}]`;
  const test2:number[]=JSON.parse(test);

  const data0=List([1,2,3,4,[1,2,3]]);
  const data1=data0.setIn([4,1],99);
  debugger;
  console.log(data1.toJS());
  //const data1=List(props.modelValue).setIn(test2, input.value).toJS();
  // debugger;
  //console.log(data1.toJS());
  emit('update:modelValue', List(props.modelValue).setIn(test2, input.value).toJS());
}

</script>
