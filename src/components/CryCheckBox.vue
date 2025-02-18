<template>
  <div :class="{ checked }" :style="{ fontSize: size + 'px', cursor: 'pointer' }" @click="clickItem()">
    <span>
      <span v-if="checked">㋡</span>
      <span v-else>☹</span>
    </span>
    <span>
      {{ value.value }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  value: KeyValue
  modelValue: KeyValue[]
  size: number
}>();

const checked = computed(() => props.modelValue.some(v => v.key == props.value.key));

const clickItem = () => {
  emits('update:modelValue', checked.value ? props.modelValue.filter(v => v.key != props.value.key) : [...props.modelValue, props.value]);
}

const emits = defineEmits<{
  (e: 'update:modelValue', value: KeyValue[]): void
}>();

</script>
<style scoped>
.checked {
  color: greenyellow
}
</style>
