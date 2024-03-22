import { useEffect } from "react";
import Message from "../components/Message";
import { useAtom } from "../jotai";
import { Ui } from "../states";

const Opened = () => {
    const [UiState, setUiState] = useAtom(Ui)

    useEffect(() => {
        const data = {
            ...UiState,
            focus: "chat"
        }
        setUiState(data)
    }, [])

    return (
        <div onFocus={() => {
        }} className="border-4 border-b-0 border-black w-[40rem] h-[20rem] mb-0 mt-auto rounded-tr-2xl rounded-bl-2xl bg-black/20 p-3">
            <div id="messages" className="w-full h-[85%] space-y-2 overflow-auto pb-2">
                <Message 
                    msg="Hello i am new here, can someone help me please :)" 
                    avatar="https://img.konami.com/yugioh/duel_links/en/series/images/icon/dm01.png" 
                />
                <Message 
                    msg="Yeah sure,  this game is fun once you understand it well, first you need to lose you verginity" 
                    avatar="https://img.konami.com/yugioh/duel_links/en/series/images/icon/dm02.png" 
                />
                <Message 
                    msg="Yoo WTF are you saying my dude" 
                    avatar="https://img.konami.com/yugioh/duel_links/en/series/images/icon/dm03.png" 
                />
            </div>
            <div id="input" className="flex w-full h-[15%] border-4 border-black rounded-2xl pl-2">
                <input type="text" className="outline-none w-[93%] pl-5 bg-transparent"/>
                <button className="w-[7%] mt-auto mb-auto">
                    <img className="w-8 h-8" src="https://img.icons8.com/forma-thin/48/forward-arrow.png" alt="forward-arrow"/>
                </button>
            </div>
        </div>
    )
}

const Closed = () => {
    const [UiState, setUiState] = useAtom(Ui)

    function showChat() {
        setUiState({
            ...UiState,
            chat: {
                opened: true,
                typing: UiState.chat.typing
            }
        })
    }

    return(
        <button 
            className="mb-4 ml-4 mt-auto w-[3rem] h-[3rem] border-4 border-black rounded-full p-2" 
            onClick={showChat}
        >
            <img 
                width="50" 
                height="50" 
                src="https://img.icons8.com/ios-filled/50/chat-message--v1.png" 
                alt="chat-message--v1"
            />
        </button>
    )
}

export default function Chat() {
    const [UiState, setUiState] = useAtom(Ui)
    if (UiState?.chat?.opened) {
        return <Opened></Opened>
    }
    return <Closed></Closed>   
}