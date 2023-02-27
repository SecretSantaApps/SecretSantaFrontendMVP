import { fetchSelfData } from '@/core/use-cases/fetch-self-data'

export const getSelfId = async (): Promise<string> => {
  const res = await fetchSelfData()
  return res.user_id
}
