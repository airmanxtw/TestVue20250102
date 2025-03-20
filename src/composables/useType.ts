import type { Ref, InjectionKey } from 'vue'
type PAGERTYPE = {
  PageIndex: Ref<number>
  addPageIndex: () => void
}
export const KEY = Symbol() as InjectionKey<string>
export const PAGEKEY = Symbol() as InjectionKey<PAGERTYPE>
