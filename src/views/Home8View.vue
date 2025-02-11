<template>
  <div @click.capture="console.log('this is div1')">
    <div @click="console.log('this is div2')">this is div2</div>
  </div>
  <D2Comp />
</template>
<script setup lang="ts">
import D2Comp from '@/components/D2Comp.vue';


// const doFun1=(d:string)=>{
//   debugger;
//   console.log(d)
//   return d
// }







</script>
