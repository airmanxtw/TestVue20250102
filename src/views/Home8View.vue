<template>
  <div @wheel="scrolling" @click.capture="console.log('this is div1')">
    div1
    <div @click="console.log('this is div2')" :style="fontSize">this is div2</div>
  </div>
  <D2Comp />

  <div @wheel.prevent style="width: 200px; height: 100px; overflow-y: scroll;">
  test1<br />
  test2<br />
  test3<br />
  test4<br />
  test5<br />
  test6<br />
  test7<br />
  test8<br />
  test9<br />
  test10<br />
</div>
</template>
<script setup lang="ts">
import D2Comp from '@/components/D2Comp.vue';
const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));
import {computed, ref} from 'vue';
const size=ref(12);
const fontSize=computed(()=>`font-size:${size.value}px`);

const scrolling=(e:WheelEvent)=>{
  if(e.deltaY>0)
  {
    size.value+=1;
  }
  else
  {
    size.value-=1;
  }
  //e.preventDefault();
}

// const doFun1=(d:string)=>{
//   debugger;
//   console.log(d)
//   return d
// }







</script>
