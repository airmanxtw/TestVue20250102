<template>
  <div :style="style2">
    this is mydiv

  </div>


</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false });

defineProps<{ style2: string }>();


</script>
