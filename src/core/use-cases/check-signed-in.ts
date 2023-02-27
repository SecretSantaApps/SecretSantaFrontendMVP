import { exists } from '@/core/utils/exists'
import { getAccessToken, getRefreshToken } from '@/core/token-storage'

export const checkSignedIn = (): boolean =>
  exists(getAccessToken()) || exists(getRefreshToken())
