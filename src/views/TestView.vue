<template>
  <h1>test</h1>
  <button @click="changeClassName">change</button>
  <button @click="clearStud">change2</button>
  {{ stud }}
  <!-- {{ name }} -->

</template>
<script lang="ts" setup>
import { nextTick, ref, shallowRef, triggerRef, reactive } from 'vue'
import { produce } from 'immer';
//import { useStud } from '@/composables/useStud'

//const { stud, clearStud } = useStud()

const oriStud = {
  name: '',
  class: { name: '' },
}

const stud = ref<Stud>(oriStud)

const clearStud = () => {
  stud.value = produce(stud.value, () => ({ ...oriStud }));
  //stud.value = cloneDeep(oriStud)
}





// const oriStud = {
//   name: '',
//   class: { name: '' }
// }
// const stud = ref({ ...oriStud });

// const clearStud = () => {
//   stud.value = { ...oriStud, class: { ...oriStud.class } };
// }








const changeClassName = () => {
  stud.value = produce(stud.value, draft => ({ ...draft, name: 'airmanx2', class: { name: '3年3班' } }))
}

const changeClassName2 = () => {
  //stud = { ...oriStud };
  //stud.value.class.name = '4年2班'
  //stud.value = { ...stud.value, class: { name: '3年3班' } }
}





</script>
<style scoped>
@import url('https://fonts.cdnfonts.com/css/digital-numbers');

h3,
h2 {
  font-family: 'Digital Numbers', sans-serif;
}
</style>
