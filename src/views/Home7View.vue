<template>
  <h1>this is Title1</h1>
  <h2 v-show="visable">thie is Title2</h2>
  <h3 :class="visable ? 'visible' : 'unvisable'">this is Title3</h3>
  <h4 class="canVisable">this is Title4</h4>
  <button @click="visable = !visable">toggle</button>
  <RouterLink to="/home6">to Home6</RouterLink>
  <ul>
    <template v-if="visable">
      <li>Li1</li>
      <li>Li2</li>
    </template>
    <li>Li3</li>
  </ul>

  <template v-for="item in data" :key="item">
    <span v-if="item == 1">input your name{{ item }}:</span>
    <span><input /></span>
  </template>

  <h-components2 :hvalue="1" content="this is Render Title1" />




</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import HComponents2 from '@/components/HComponents2.vue'
const visable = ref(true);

const cssName = computed(() => visable.value ? 'block' : 'none');
const data = ref([1, 2, 3, 4, 5, 6]);

setInterval(() => {
  //visable.value = !visable.value;
  console.log('hello ~ i am here');
}, 1000);

</script>

<style scoped>
.visable {
  display: block;
}

.unvisable {
  display: none;
}

.canVisable {
  display: v-bind(cssName);
}
</style>
