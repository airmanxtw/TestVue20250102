import type { InjectionKey } from 'vue'
export const useType = () => {
  const key = Symbol() as InjectionKey<string>
  return {key}
}
