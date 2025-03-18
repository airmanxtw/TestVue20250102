<template>
  <dialog :open="modelValue">
    <slot name="header"></slot>
    <hr />
    <slot></slot>
    <hr />
    <slot name="footer" :closeDialog>
      <button @click="closeDialog">close</button>
    </slot>


  </dialog>
</template>
<script setup lang="ts">
defineProps<{ modelValue: boolean }>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();
const closeDialog = () => {
  emit('update:modelValue', false)
}
</script>



<style scoped>
dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
