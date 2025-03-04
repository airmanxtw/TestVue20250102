<template>
  <button @click="getData">getdata</button>
  <hr />
  Product title的長度為: {{ productTitleLength }}
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Effect, Exit, Cause, pipe } from 'effect';
import { useFetch } from "@/composables/useFetch";


const { getDataByEffect } = useFetch();
const productTitleLength = ref(0);

// 取得title欄位的長度
const getTitleLength = (p: Product) =>
  Effect.if(!!p.title == true, { onTrue: () => Effect.succeed(p.title.length), onFalse: () => Effect.fail(new Error('發生錯誤,無title欄位')) });

// 取得編號為1的產品資料,並取得title欄位的長度
const titleLength = pipe(
  getDataByEffect(1),
  Effect.andThen(getTitleLength)
);

const getData = async () => {
  // 批配取得的資料
  Exit.match(await Effect.runPromiseExit(titleLength), {
    onSuccess: (length) => {
      productTitleLength.value = length;
    },
    onFailure: (error) => {
      //alert(`發生錯誤: ${(Cause.squash(error) as Error).message}`);
      alert(`發生錯誤: ${Cause.pretty(error)}`);
    }
  })
}


</script>
