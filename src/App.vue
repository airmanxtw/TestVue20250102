<script setup lang="ts">
import { onErrorCaptured } from 'vue';
import { ref } from 'vue';
const show = ref(false);
const message = ref('');
type ErrorObj = {
  message: string
  a: number
  b: number
};

onErrorCaptured((error) => {
  debugger;
  const obj = JSON.parse(error.message) as ErrorObj;
  message.value = `錯誤訊息:${obj.message},a:${obj.a},b:${obj.b}`;
  show.value = true;

});

</script>

<template>
  <v-app>
    <v-container>
      <RouterView />
      <v-snackbar color="warning" v-model="show">
        {{ message }}
      </v-snackbar>
    </v-container>
  </v-app>


</template>
