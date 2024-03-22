export default function Message({ msg, avatar }: { msg: string, avatar: string }) {
    return (
        <div className="flex h-fit w-[90%]">
            <div className="w-10 h-10">
                <img src={avatar} className="w-full h-full rounded-2xl object-fit"/>
            </div>
            <div id="info" className="flex w-full ml-2 mt-1 space-x-2">
                <h1 id="name" className="text-xl text-red-500 font-bold">user</h1>
                <h1 id="message" className="text-lg break-words">{msg}</h1>
            </div>
        </div>
    )
}