import type { AxiosInstance } from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
export const useAxiosMock = (axiosInstance: AxiosInstance) => {
  const mock = new AxiosMockAdapter(axiosInstance, { delayResponse: 500 })
  mock.onGet('https://jsonplaceholder.typicode.com/posts').reply(200, [
    { userId: 1, id: 1, title: 'title1', body: 'body1' },
    { userId: 2, id: 2, title: 'title2', body: 'body2' },
    { userId: 2, id: 3, title: 'title2', body: 'body2' },
  ])
  return { axiosInstance }
}
