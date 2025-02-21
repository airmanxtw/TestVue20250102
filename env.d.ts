/// <reference types="vite/client" />
type CClass = {
  name: string
}

type Stud = {
  name: string
  class: CClass
}

type Tea = {
  name: string
  age: number
}

type Rating = {
  rate: number
  count: number
}

type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

type Doc1 = {
  words: string
}

type Doc2 = {
  words: string
  length: number
}

type Category = {
  id: number
  name: string
  image: string
}

type ProductItem = {
  id: number
  title: string
  price: number
  description: string
  images: string[]
}

type KeyValue = {
  key: string
  value: string
}

interface Msg {
  msg: string
}

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
