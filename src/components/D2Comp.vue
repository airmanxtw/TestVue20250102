<template>
  <h1 >hello,this is D2Comp</h1>
  <D22Comp />
</template>
<script setup lang="ts">
import {KEY} from '@/composables/useType';

// import { inject, type InjectionKey,type Ref } from 'vue'
import D22Comp from './D22Comp.vue';
import {provide} from 'vue';



provide(KEY, "123")

// const data=inject<Ref<string,string>>("data");
// console.log(data?.value);
// debugger;

// const clickH1=()=>{
//   if(doFun1){
//     doFun1('this is D2Comp')
//   }
// }


</script>
