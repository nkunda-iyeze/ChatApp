import { useState } from "react"

const style = {
    form:'h-14 w-full max-w-[728px] flex text-xl absolute bottom-0',
    input:'w-full text-xl p-3 bg-gray-900 outline-none border-none',
    button:'w-[20%] bg-green-700',
}
const SendMessage = () => {
    const [input, setInput] =useState()
  return (
    <form className={style.form}>

        <input type="text"  className={style.input} placeholder="Message" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button className={style.button}>Send</button>
    </form>
  )
}

export default SendMessage