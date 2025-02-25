export const useFetch = () => {
  const getData = async (url: string) => {
    const res = await fetch(url)
    return await res.json()
  }
  return { getData }
}
