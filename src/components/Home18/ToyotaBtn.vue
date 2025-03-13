<template>

  <!-- <input :value="personName" @input="personName = ($event.target as HTMLInputElement).value" /> -->

  <slot>

  </slot>
  <!-- <input :value="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" /> -->
  <input v-model="model" :class="{ silverStone: onValid.length==0 , error: onValid.length>0 }" />
  <span :class="{error:onValid.length>0}">{{ onValid.join(',') }} </span>
  <input type="checkbox" v-model="ischecked" class="silverStone" />
  <!-- <input class="silverStone" v-model="personName" /> -->
  <br />
  己輸入字數:{{ nameLength }}
</template>
<script setup lang="ts">

import { computed } from 'vue';
const model = defineModel<string>();
const ischecked = defineModel<boolean>('ischecked');

const props = defineProps<{
  rules: ((v: string) => true | string)[]
}>();

const onValid = computed(() => props.rules.map(rule=>rule(model.value ?? "")).filter(result=>typeof result === 'string'));

// const props = defineProps({
//   modelValue: String
// })

const nameLength = computed(() => model.value?.length ?? "");

</script>

<style scoped>
.silverStone {
  background: #989898;
  background:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%),
    radial-gradient(at top center, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.40) 120%);
  background-blend-mode: multiply, multiply;
  font-size: large;
  color: white
}

.error {
  background-color: red;
  font-size: large;
  color: white
}
</style>
