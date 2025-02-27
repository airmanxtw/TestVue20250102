export type props = { width?: number; visable?: boolean }
export type propsV2 = props & { height?: number }
export interface propsV3 {
  width?: number
  height?: number
  visable?: boolean
}
export interface propsV4 extends propsV3 {
  color?: string
}
