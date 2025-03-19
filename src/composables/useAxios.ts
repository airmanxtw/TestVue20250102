import axios from 'axios'
import { useAxiosMock } from './useAxiosMock'
export const useAxios = () => {
  const { axiosInstance } = useAxiosMock(axios)
  const getPosts = async () => {
    const res = await axiosInstance.get<post[]>('https://jsonplaceholder.typicode.com/posts')
    return res.data
  }
  return { getPosts }
}
