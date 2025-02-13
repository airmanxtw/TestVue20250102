<template>
  <h1 @copy.prevent :style="fontSize">home10</h1>
  <div style="width:400px;background-color: aqua;padding :10px;" @click="() => doAlert('this is div 1')">
    <div style="width:200px;background-color:burlywood;" @click.once="() => doAlert('this is div 2')">this is div 2
    </div>
  </div>
  <div style="width:200px;height:100px;overflow-y:scroll;" @wheel.prevent="toBig">
    <div v-for="n in 50" :key="n">div {{ n }}</div>
  </div>
  <input :value="plate" @input="(e) => { plate = (e.target as HTMLInputElement).value.toLocaleUpperCase() }" />

</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
const size = ref(12);
const plate = ref('');
const fontSize = computed(() => `font-size:${size.value}px`);

onMounted(() => {
  //window.addEventListener('keydown', toBig);
});

const toBig = (e: Event) => {
  console.log(e);
  debugger;
  size.value += 1;
}

const doAlert = (message: string) => {

  alert(message);
}
</script>
