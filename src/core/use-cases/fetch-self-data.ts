import { client } from '@/core/axios-client'

export type UserData = {
  user_id: string
  username: string
  email: string
  avatar: string
  address?: string
}

export const fetchSelfData = async () => {
  const res = await client.get<UserData>('/api/v1/user')
  return res.data
}
