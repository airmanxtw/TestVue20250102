<template>
  <h1>Home18</h1>
  <h1>{{ personName }}-{{ ischecked }}</h1>
  <!-- <ToyotaBtn :person-name="personName" @input="(v) => personName = v" /> -->
  <ToyotaBtn v-model="personName" v-model:ischecked="ischecked" :rules="[isEmpty, isLength, isLetter]">
    <h2>請輸入你的姓名</h2>
  </ToyotaBtn>
  <br />
  <ToyotaBtn v-model="personAddr" v-model:ischecked="ischecked2" :rules="[isEmpty]">
    <h2>請輸入你的住址</h2>
  </ToyotaBtn>
</template>
<script setup lang="ts">
import ToyotaBtn from '@/components/Home18/ToyotaBtn.vue';
import { ref } from 'vue'
const personName = ref('')
const personAddr = ref('')
const ischecked = ref(false)
const ischecked2 = ref(false)

const isEmpty = (v: string) => !!v || '不可為空';
const isLength = (v: string) => v.length < 10 || '字數不可超過10';
const isLetter = (v: string) => /^[a-zA-Z]+$/.test(v) || '只能輸入英文字母';

</script>
