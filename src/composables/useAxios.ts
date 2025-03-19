import type { AxiosInstance } from 'axios'
import axios from 'axios'
export const useAxios = (axiosIns: AxiosInstance = axios) => {
  const getPosts = async () => {
    const res = await axiosIns.get<post[]>('https://jsonplaceholder.typicode.com/posts')
    return res.data
  }
  return { getPosts }
}
