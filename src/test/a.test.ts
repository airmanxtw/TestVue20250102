import { expect, test } from 'vitest'
import { useMath } from '@/composables/useMath'
test('my test1', () => {
  expect(1 + 1).toBe(2)
})

const { add } = useMath()
// 加入一個函式，輸入一個數值，並回傳平方值。用測試來驗證這個函式。
test('square', () => {
  expect(add(1, 2)).toBe(3)
})
