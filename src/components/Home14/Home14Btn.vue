<template>
  {{ width }}
  <div class="btnDiv" :style="widthStyle" v-show="visable">
    <slot>
      按鈕
    </slot>
  </div>
</template>
<script setup lang="ts">
import type { props } from '@/type/MyProps.ts';
import { computed } from 'vue';



// O
const { visable = false, width = 50 } = defineProps<props>();
//const props = defineProps<props>();

const widthStyle = computed(() => `width:${width}px`);

// X
// defineProps({
//   width: {
//     type: Number,
//     required: true,
//     validator: (value: number) => value > 0,

//   },
// });



</script>
<style scoped>
.btnDiv {
  border-width: 1px;
  border-style: solid;
  background-color: darkgoldenrod;
  cursor: pointer;
  border-radius: 1px;
  text-align: center;
}
</style>
