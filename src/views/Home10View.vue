<template>
  <h1 @copy.prevent :style="fontSize">home10</h1>
  <div style="width:400px;background-color: aqua;padding :10px;" @click.capture.stop="() => doAlert('this is div 1')">
    <div style="width:200px;background-color:burlywood;" @click="() => doAlert('this is div 2')">this is div 2
    </div>
  </div>
  <div style="width:200px;height:100px;overflow-y:scroll;" @wheel.prevent="toBig">
    <div v-for="n in 50" :key="n">div {{ n }}</div>
  </div>
  <!-- <input :value="plate"
    @input="(e: Event) => { plate = (e.target as HTMLInputElement).value.toLocaleUpperCase() }" /> -->

  <span style="margin-top: 20px;">請輸入車牌:</span>
  <input :value="plate" @input="(e: Event) => { plate = (e.target as HTMLInputElement).value.toLocaleUpperCase() }" />
  <div :class="{ 'warning': plate.length > maxLength }">輸入字數: {{ plateCount }}/{{ maxLength }}</div>

  <img src="https://picsum.photos/id/237/200/300" @wheel="onWheel" :width="`${imgWidth}px`" />

</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
const size = ref(12);
const plate = ref('');
const plateCount = computed(() => plate.value.length);
const maxLength = ref(8);
const imgWidth = ref(200);

const onWheel = (e: Event) => {
  imgWidth.value += (e as WheelEvent).deltaY > 0 ? -10 : 10;
}

const onPlate = (e: Event) => {
  console.log(`:${e.cancelable}`);
  e.preventDefault();
  // if ((e.target as HTMLInputElement).value.length > maxLength.value) {
  //   console.log(`:${e.cancelable}`);
  //   e.preventDefault();
  // }
  // else {
  //   plate.value = (e.target as HTMLInputElement).value.toLocaleUpperCase();
  // }
}





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
<style scoped>
.warning {
  color: red;
}
</style>
