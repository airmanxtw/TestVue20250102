<template>

  <button @click="openDialog = true">open dialog</button>
  <MyDialog v-model="openDialog">
    <template v-slot:header>
      <h1>header</h1>
    </template>
    <template v-slot:default>
      <p style="color:red">最新消息，北市近日出現一隻接連闖禍，跳出車外傷人的比特犬，已遭動保處沒入、產業局加重裁罰，飼主兒子也在昨（17日）深夜發道歉聲明。</p>
    </template>

    <template v-slot:footer="{ closeDialog }">
      <button @click="() => confirm(closeDialog)">確定</button>
      <button @click="closeDialog">取消</button>
    </template>

  </MyDialog>
  {{ posts }}
</template>
<script setup lang="ts">
import MyDialog from '@/components/Home20/MyDialog.vue';


import { useAxios } from '@/composables/useAxios';
import { useAxiosMock } from '@/composables/useAxiosMock';
const { axios } = useAxiosMock();
const { getPosts } = useAxios(axios);




import { ref } from 'vue';

const posts = ref<post[]>([]);

getPosts().then((res) => {
  posts.value = res
})



const confirm = (e: () => void) => {
  alert('confirm')
  e();
}





const openDialog = ref(false);
</script>
