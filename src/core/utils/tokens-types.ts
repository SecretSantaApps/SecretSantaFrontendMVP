export type RefreshToken = {
  token: string
  expiration: number
}

export type TokenPair = {
  access_token: string
  refresh_token: RefreshToken
}
