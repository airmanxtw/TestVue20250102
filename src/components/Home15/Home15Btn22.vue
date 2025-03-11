<template>
    <div style="border:1px solid red;padding: 10px;">
      <button v-bind="$attrs">click me</button>
      <input v-model="model" />
    </div>
</template>
<script setup lang="ts">
defineOptions({inheritAttrs: false});
const model=defineModel();
</script>

