<template>
  <h1>商品分類</h1>
  <ul>
    <li v-for="category in categories" :key="category.id" @click="emits('update:selectedIndex', category.id)"
      :class="{ bg: category.id === selectedIndex }">
      {{ category.name }}
    </li>
  </ul>
</template>
<script setup lang="ts">
defineProps<{ categories: Category[], selectedIndex: number }>();
const emits = defineEmits<{
  (e: "update:selectedIndex", value: number): void
}>();

</script>

<style scoped>
.bg {
  background-color: greenyellow;
  color: black
}
</style>
