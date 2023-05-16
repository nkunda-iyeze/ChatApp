import { auth } from "../firebase"

const style = {
    message:`flex items-center m-4 shadow-xl py-2 px-3 rounded-tl-full rounde-tr-full `,
    name:`asbolute mt-[-4rem] text-gray-600 text-xs`,
    sent:`bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-br-full`,
    received:`bg-[#e5e5ea] text-black float-left rounded-br-full`,
}
const Message = ({message}) => {
  const messageClass = message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;
  return (
    <div>
        <div className={`${style.message} ${messageClass}`}>
            <p className={style.name}>{message.name}</p>
            <p>{message.text}</p>

        </div>
    </div>
  )
}

export default Message