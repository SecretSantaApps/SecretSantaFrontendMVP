import { client } from '@/core/axios-client'
import type { RefreshToken } from "@/core/utils/tokens-types";

export type AuthResponse = {
  access_token: string
  refresh_token: RefreshToken
}

export type SignUpRequest = {
  email: string
  password: string
  username: string
}

export type LoginRequest = {
  email: string
  password: string
}

export const signUpViaEmailRequest = async (
  request: SignUpRequest,
): Promise<AuthResponse> => {
  const res = await client.post('/api/v1/auth/email/register', request)
  return res.data
}

export const loginViaEmailRequest = async (
  request: LoginRequest,
): Promise<AuthResponse> => {
  const res = await client.post('/api/v1/auth/email/login', request)
  return res.data
}
