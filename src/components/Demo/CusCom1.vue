<template>
  <h1>this is cusCom1-MSG:{{ msg }}</h1>
</template>
<script setup lang="ts">
import type { Msg } from "@/type/Msg"
defineProps<Msg>()
</script>
