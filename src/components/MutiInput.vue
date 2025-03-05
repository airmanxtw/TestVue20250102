<template>
  <input v-for="(item, index) in props.modelValue" :key="index" :value="item"
    @input="(e) => updateItem(index, (e.target as HTMLInputElement).value)" />
</template>
<script setup lang="ts">
const props = defineProps<{
  modelValue: string[];
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void;
}>();
import { List } from "immutable";
const updateItem = (index: number, value: string) => {
  debugger;
  emit('update:modelValue', List(...props.modelValue).setIn([index], value).toArray());
}

</script>
