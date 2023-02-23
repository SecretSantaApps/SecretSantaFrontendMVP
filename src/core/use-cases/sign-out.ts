import { clearAccessToken, clearRefreshToken } from '@/core/token-storage'

export const signOut = (navigate = true) => {
  clearAccessToken()
  clearRefreshToken()
  console.log('sign out')
  if (navigate) window.location.href = '/login'
}
