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


const getData = async () => {

  const getTitleLength = (p: Product) => p.title.length;

  const titleLength = pipe(
    getDataByEffect(1),
    Effect.andThen(getTitleLength)
  );

  Exit.match(await Effect.runPromiseExit(titleLength), {
    onSuccess: (length) => {
      productTitleLength.value = length;
    },
    onFailure: (error) => {
      alert(`發生錯誤: ${(Cause.squash(error) as Error).message}`);
    }
  })
}


</script>
