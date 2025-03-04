import { Effect } from 'effect'

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

  const getDataByEffect = (productId: number) =>
    Effect.tryPromise({
      try: () =>
        fetch(`httpxs://jsonplaceholder.typicode.com/posts/${productId}`)
          .then((res) => res.json())
          .then((json) => json as Product),
      catch: () => new Error('取得資料失敗'),
    })

  return { getData, getDataByPromise, getDataByCallBack, getDataByEffect }
}
