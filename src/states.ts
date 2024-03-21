import { atom } from "./jotai"
import { AuthInterface, LevelInterface } from "./interface"

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
