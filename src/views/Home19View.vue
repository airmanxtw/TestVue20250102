<template>
  <MyDiv data-value="hello"></MyDiv>

  <MyDiv data-value2="hello"></MyDiv>
  <MyDiv data-value3="hello"></MyDiv>
  <MyDiv data-value4="hello"></MyDiv>

  
  <MyDiv data-value5="hello" @click="alertme"></MyDiv>


</template>
<script setup lang="ts">
import MyDiv from '@/components/Home19/MyDiv.vue';
const alertme = () => {
  alert('alertme')
}
</script>
