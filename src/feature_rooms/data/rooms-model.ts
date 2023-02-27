import { client } from '@/core/axios-client'

export type RoomModel = {
  room_name: string
  room_id: string
  members_count: string
  game_started: boolean
  accepted: boolean
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

export type RoomCreationRequest = {
  room_name: string
  playable_owner: boolean
  wishlist?: string
  max_price?: number
}

export type JoinRoomRequest = {
  room_id: string
  wishlist?: string
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

export const createRoomRequest = async (
  data: RoomCreationRequest,
): Promise<{ status: number; message: string }> => {
  const res = await client.post('/api/v1/room', data)
  return { status: res.status, message: res.data }
}

export const joinRoomRequest = async (
  data: JoinRoomRequest,
): Promise<{ status: number; message: string }> => {
  const res = await client.post('/api/v1/game/join', data)
  return { status: res.status, message: res.data }
}

export const acceptUserRequest = async (
  roomId: string,
  userId: string,
): Promise<{ status: number; message: string }> => {
  const res = await client.post('/api/v1/game/accept', {
    room_id: roomId,
    user_id: userId,
  })
  return { status: res.status, message: res.data }
}

export const kickUserRequest = async (
  roomId: string,
  userId: string,
): Promise<{ status: number; message: string }> => {
  const res = await client.post('/api/v1/game/kick', {
    room_id: roomId,
    user_id: userId,
  })
  return { status: res.status, message: res.data }
}
