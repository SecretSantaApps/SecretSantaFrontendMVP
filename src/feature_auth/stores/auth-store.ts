import {
  loginViaEmailRequest,
  signUpViaEmailRequest,
} from '@/feature_auth/data/auth-model'
import { useRouter } from 'vue-router'
import { setAccessToken, setRefreshToken } from '@/core/token-storage'

export const useAuth = () => {
  const router = useRouter()

  const signUpViaEmail = async (
    email: string,
    password: string,
    username: string,
  ) => {
    signUpViaEmailRequest({
      email: email,
      password: password,
      username: username,
    })
      .then(data => {
        setAccessToken(data.access_token)
        setRefreshToken(data.refresh_token)
        router.push('/rooms').catch(console.log)
      })
      .catch(reason => {
        console.log(reason)
      })
  }

  const loginViaEmail = async (email: string, password: string) => {
    loginViaEmailRequest({
      email: email,
      password: password,
    })
      .then(data => {
        setAccessToken(data.access_token)
        setRefreshToken(data.refresh_token)
        console.log(data)
        router.push('/rooms').catch(console.log)
      })
      .catch(reason => {
        console.log(reason)
      })
  }

  return {
    loginViaEmail,
    signUpViaEmail,
  }
}
