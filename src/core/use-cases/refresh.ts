import { client } from '@/core/axios-client'
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from '@/core/token-storage'
import { exists } from '@/core/utils/exists'
import type { TokenPair } from '@/core/utils/tokens-types'
import { signOut } from '@/core/use-cases/sign-out'

const refreshTokenPair = async (refresh: string): Promise<TokenPair> => {
  const res = await client.post('/api/v1/auth/refresh', {
    refresh_token: refresh,
  })
  return res.data
}

export const useRefresh = () => {
  return async () => {
    const accessToken = getAccessToken()
    const refreshToken = getRefreshToken()

    if (exists(accessToken) && exists(refreshToken)) return

    if (!exists(accessToken) && exists(refreshToken)) {
      try {
        console.log('Refreshing tokens')
        const tokenPair = await refreshTokenPair(refreshToken.token)
        if (exists(tokenPair)) {
          setAccessToken(tokenPair.access_token)
          setRefreshToken(tokenPair.refresh_token)
        } else {
          signOut()
        }
      } catch (e) {
        console.log(e)
        signOut()
      }
    } else {
      signOut()
    }
  }
}
