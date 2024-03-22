import { Screen } from "../config";
import Chat from "./Chat";

export default function Index() {
    return (
        <div id="ui-position" className={`flex absolute z-10 w-full h-full justify-center items-center`} onKeyDown={() => console.log("down")} onKeyUp={() => console.log("down")}>
            <div id="ui-wrapper" className="flex" style={{width: Screen.width, height: Screen.height}}>
                <Chat></Chat>
            </div>
        </div>
    )
}