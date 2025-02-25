<template>
  <div style="cursor: pointer;" @click="$emit('click', !checked)">
    <svg v-if="checked" :fill="fill" :width="width" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z" />
      <path d="M10.996 12.556 9.7 11.285l-1.4 1.43 2.704 2.647 4.699-4.651-1.406-1.422z" />
    </svg>
    <svg v-else :fill="fill" :width="width" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">
      <path d="M9 11h6v2H9z" />
      <path
        d="M17 5H7c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM7 17V7h10l.002 10H7z" />
    </svg>
    <span :style="`font-size: ${width + 10}px;color:${fill}`">
      <slot>請選擇</slot>
    </span>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

import type { SvgType } from "@/type/Svg";



defineProps<SvgType>();

//defineProps<SvgType>();

onMounted(async () => {
  // const valid = await SvgSchema.validate(props);
  // console.log(valid);
});



defineEmits<{
  (e: 'click', value: boolean): void
}>();
</script>
