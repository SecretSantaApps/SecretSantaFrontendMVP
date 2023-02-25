import { client } from '@/core/axios-client'
import RoomDetails from "@/feature_rooms/presentation/components/RoomDetails.vue";

export type RoomModel = {
  room_name: string
  room_id: string
  members_count: string
  game_started: boolean
}

export type RoomDetailsModel = {
  room_id: string
  room_name: string
  owner_id: string
  max_price?: number
  recipient: string
  users: UserRoomInfo[]
}

export type UserRoomInfo = {
  user_id: string
  username: string
  address?: string
  wishlist?: string
  avatar: string
  accepted?: boolean
}

export const fetchRoomsList = async (): Promise<RoomModel[]> => {
  const res = await client.get<RoomModel[]>('/api/v1/user/rooms')
  return res.data
}

export const fetchRoomDetails = async (
  id: string,
): Promise<RoomDetailsModel> => {
  const res = await client.get<RoomDetailsModel>('/api/v1/game/info', {
    params: {
      id,
    },
  })
  return res.data
}

