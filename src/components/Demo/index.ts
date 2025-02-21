import { defineAsyncComponent } from 'vue'
export { default as CusCom1 } from './CusCom1.vue'
//export { default as CusCom2 } from './CusCom2.vue'
const CusCom2 = defineAsyncComponent(() => import('./CusCom2.vue'))
export { CusCom2 }
