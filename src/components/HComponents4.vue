<template>
  <node />
  <input style="border:none;border-bottom:1px solid black;outline:none;"/>
  <!-- 產生一個input，僅只有下引線，沒有邊框 -->




</template>
<script setup lang="ts">
import {h} from 'vue';
const hnode=h('h1','hello,this is HComponents4');
const node=h('div',['<h1>hello</h1>',hnode]);

</script>
