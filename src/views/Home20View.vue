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
  <my-data-table :model-value="pageData" v-model:page-index="pageIndex" :pageSize :total></my-data-table>

</template>
<script setup lang="ts">
import MyDialog from '@/components/Home20/MyDialog.vue';
import MyDataTable from '@/components/Home21/MyDataTable.vue';


import { useAxios } from '@/composables/useAxios';

// import { useAxiosMock } from '@/composables/useAxiosMock';
// const { axios } = useAxiosMock();
const { getPosts } = useAxios();




import { computed, ref } from 'vue';

const posts = ref<Post[]>([]);


const pageIndex = ref(1);
const pageSize = ref(5);
const total = computed(() => posts.value.length);
const pageData = computed(() => posts.value.slice((pageIndex.value - 1) * pageSize.value, pageIndex.value * pageSize.value));

getPosts().then((res) => {
  posts.value = res
})


const confirm = (e: () => void) => {
  alert('confirm')
  e();
}





const openDialog = ref(false);
</script>
