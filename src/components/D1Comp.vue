<template>
  <h1>{{ props.name }}-{{ props.age }}</h1>

</template>
<script setup lang="ts">
interface ITea {
  name: string
  age: number
}
const props = defineProps<ITea>();
</script>
