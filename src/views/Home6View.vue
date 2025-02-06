<template>
  <h2>score:{{ score }}</h2>
  <h2>{{ }}</h2>
  <p :class="scoreClass">
    hello from Home6View
  </p>
  <d3-comp :class="scoreClass" />
  <button @click="score++">add</button>
  <button @click="score--">minus</button>
  <router-link to="/home7">to Home7</router-link>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import D3Comp from '@/components/D3Comp.vue'
const score = ref(60);



const scoreClass = computed(() => {
  return {
    warning: score.value < 60,
    agree: score.value >= 60,
    agreeVeryGood: score.value >= 80,
  }
})
</script>

<style>
.warning {
  color: red;
  font-weight: 800;
}

.agree {
  color: green;
  font-weight: 800;
}

.agreeVeryGood {

  background-color: red;
}
</style>
