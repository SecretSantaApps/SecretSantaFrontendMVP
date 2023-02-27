import axios from 'axios'
import { nanoid } from 'nanoid'
import { useRefresh } from '@/core/use-cases/refresh'
import { getAccessToken } from '@/core/token-storage'

const BASE_URL = ''

export const client = axios.create({
  baseURL: BASE_URL,
})

client.interceptors.request.use(async request => {
  if (request.url?.includes('/auth')) {
    request.headers.set({
      'client-id':
        localStorage.getItem('clientId') ??
        (() => {
          localStorage.setItem('clientId', nanoid(6))
          return localStorage.getItem('clientId')
        })(),
    })
    return request
  }
  const refresh = useRefresh()
  await refresh()
  console.log(`Access token: ${getAccessToken()}`)
  request.headers.Authorization = `Bearer ${getAccessToken()}`
  return request
})
