<template>
  <div>
    <h1 class="vibrate-1">{{ counter.name }}</h1>
    <p>{{ counter.count }}</p>
    <p :class="warning">{{ getResult }}</p>
    <button @click="increase">+1</button>
    <button style="margin-left: 3px;" @click="decrease">-1</button>
    <button style="margin-left: 3px;" @click="clear">Clear</button>
    <!-- <D1Comp name="airmanx" :age="10"></D1Comp> -->
    <p>com</p>
    <component :is="D1Comp" name="airmanx" :age="10"></component>
    <p>cname:</p>
    {{ props.cname }}
    {{ w }}

  </div>

</template>
<script setup lang="ts">
import { ref, computed, defineAsyncComponent, watchEffect, watchSyncEffect  } from "vue";
import { produce } from "immer";
//import D1Comp from "@/components/D1Comp.vue";
import D2Comp from "@/components/D2Comp.vue";

const props = defineProps<{ cname: string }>();

const D1Comp = defineAsyncComponent(() =>
  import(`@/components/${props.cname}.vue`)
)


const oriCounter = { name: '計數器', count: 0 };
const counter = ref(oriCounter);
const w = ref(true);

const cid = ref('D1Comp');
const tabs = [D1Comp, D2Comp];

const increase = () => {

  counter.value = produce(counter.value, draft => ({ ...draft, count: draft.count + 1 }));
};

const decrease = () => {
  counter.value = produce(counter.value, draft => ({ ...draft, count: draft.count - 1 }));
};

const clear = () => {
  counter.value = produce(counter.value, () => ({ ...oriCounter }));
};

const getResult = computed(() => {

  return counter.value.count > 0 ? '正數' : "負數";
});

const warning = computed(() => counter.value.count > 0 ? '' : 'warning');

watchEffect(() => {
  debugger;
  w.value = counter.value.count > 0 ? true : false;
});

watchSyncEffect (() => {
  debugger;
  console.log(counter.value.count);
});



</script>

<style scoped>
.warning {
  color: red;
}
</style>
