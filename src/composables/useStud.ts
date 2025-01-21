import { computed, ref, shallowRef } from 'vue'
import cloneDeep from 'lodash/cloneDeep'
//import { Map } from 'immutable'
export const useStud = () => {
  const oriStud = {
    name: '',
    class: { name: '' },
  }

  const stud = shallowRef<Stud>(oriStud)

  const clearStud = () => {
    //stud.value = cloneDeep(oriStud)
  }

  const findMax = (arr: number[]): number =>
    arr.length == 1 ? arr[0] : arr[0] > findMax(arr.slice(1)) ? arr[0] : findMax(arr.slice(1))

  const length = computed(() => stud.value.class.name.length)

  return { stud, clearStud, findMax, length }
}
