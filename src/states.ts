import { atom } from "./jotai"
import { AuthInterface, LevelInterface, UiInterface } from "./interface"

export const Auth = atom({
  logged: false,
  info: {
    username: "",
    password: "",
    session: ""
  },
})

export const Level = atom<LevelInterface>({
  type: "loading",
})

export const Ui = atom<UiInterface>({
  focus: "none",
  chat: {
    opened: false,
    typing: false
  }
})

