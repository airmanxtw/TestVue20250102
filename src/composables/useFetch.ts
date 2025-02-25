import type { ProjectReference } from 'typescript'

export const useFetch = () => {
  const getData = async (url: string) => {
    const res = await fetch(url)
    return (await res.json()) as Product
  }

  const getDataByPromise = (url: string) => {
    return new Promise<Product>((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  }

  const getDataByCallBack = (url: string, callback: (data: Product) => void) => {
    {
      fetch(url)
        .then((res) => res.json())
        .then((data) => callback(data))
    }
  }

  return { getData, getDataByPromise, getDataByCallBack }
}
