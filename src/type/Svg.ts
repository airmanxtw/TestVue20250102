// type SvgType = {
//   width: number
//   fill: string
//   checked?: boolean
// }

import { object, number, string, boolean } from 'yup'
import type { InferType } from 'yup'

type SvgType = {
  width: number
  fill: string
  checked?: boolean
}

export type { SvgType }
