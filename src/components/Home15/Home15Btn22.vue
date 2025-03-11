<template>
    <div style="border:1px solid red;padding: 10px;">
      <button v-bind="$attrs">click me</button>
    </div>
</template>
<script setup lang="ts">
defineOptions({inheritAttrs: false});
</script>

