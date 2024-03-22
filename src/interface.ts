export interface AuthInterface {
  logged: boolean
  info: {
    username: string
    password: string
    session: string
  }
}

export interface UiInterface {
  focus: "none" | "chat"
  chat: {
    opened: boolean
    typing: boolean
  }
}

export interface LevelInterface {
  type: string
}