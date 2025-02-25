import { object, number, string, boolean } from 'yup'
import type { InferType } from 'yup'
const SvgSchema = object({
  width: number().required().max(100).min(1),
  fill: string().required(),
  checked: boolean(),
})


type SvgType = InferType<typeof SvgSchema>

export { type SvgType, SvgSchema }
