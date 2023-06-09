import { useState } from "react"
import { auth,db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const style = {
    form:'h-14 w-full max-w-[728px] flex text-xl fixed bottom-0',
    input:'w-full text-xl p-3 bg-gray-900 outline-none border-none text-white',
    button:'w-[20%] bg-green-700',
}
const SendMessage = ({scroll}) => {
    const [input, setInput] =useState()
    const sendMessage = async(e) =>{
      e.preventDefault();
      if(input === ''){
        alert('Please enter a valid message');
        return;
      }
      const {uid,displayName} = auth.currentUser;
      await addDoc(collection(db,"messages"),{
        text:input,
        name:displayName,
        uid,
        timestamp:serverTimestamp()
      })
      setInput('');
      scroll.current.scrollIntoView({behavior:'smooth'})

    }
  return (
    <form className={style.form} onSubmit={sendMessage}>

        <input type="text"  className={style.input} placeholder="Message" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button className={style.button} type="submit">Send</button>
    </form>
  )
}

export default SendMessage