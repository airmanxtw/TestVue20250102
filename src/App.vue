<script setup lang="ts">
import { onErrorCaptured } from 'vue';

// import { RouterLink, RouterView } from 'vue-router'

onErrorCaptured((error) => {
  console.log('onErrorCaptured', error.message);
  debugger;
});

</script>

<template>
  <v-app>
    <v-container>
      <RouterView />
    </v-container>
  </v-app>


</template>
