import { useEffect, useRef, useState } from "react"
import Message from "./Message"
import {collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import SendMessage from "./SendMessage";

const style = {
    main:'flex flex-col p-[10px] relative h-screen mb-8',
}
const Chat = () => {
  const [messages, setMessages] = useState();
  useEffect(()=>{
      const q = query(collection(db,'messages'),orderBy('timestamp'));
      const unsubscribe = onSnapshot(q,(QuerySnapshot)=>{
        let messages = [];
        QuerySnapshot.forEach(doc =>{
          messages.push({...doc.data(), id: doc.id})
        });
        setMessages(messages)

      });
      return ()=> unsubscribe();
  },[])
    const scroll = useRef()
  return (
    <>
    <main className={style.main}> Chat
    {messages && messages.map((message)=>(<Message key={message.id} message= {message}/>))} 
    </main>
    {/* Send Message Component */}
    <SendMessage scroll={scroll}/>
    <span ref={scroll}></span>
    </>
  )
}

export default Chat