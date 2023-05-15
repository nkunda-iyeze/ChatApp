import { useRef } from "react"

const style = {
    main:'flex flex-col p-[10px] relative',
}
const Chat = () => {
    const scroll = useRef
  return (
    <>
    <main className={style.main}>Chat
    {/* Chat Message component  */}
    </main>
    {/* Send Message Component */}
    <span ref={scroll}></span>
    </>
  )
}

export default Chat