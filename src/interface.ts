export interface AuthInterface {
  logged: boolean
  info: {
    username: string
    password: string
    session: string
  }
}

export interface LevelInterface {
  type: string
}
