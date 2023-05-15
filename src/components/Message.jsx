const style = {
    message:`flex items-center m-4 shadow-xl py-2 px-3 rounded-tl-full rounde-tr-full `,
    name:`fixed mt-[-4rem] text-gray-600 text-xs`,
    sent:`bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received:`bg-[#e5e5ea] text-black float-left rounded-br-full`,
}
const Message = () => {
  return (
    <div>
        <div className={style.message}>
            <p className={style.name}>Shalom</p>
            <p>I'm Learning React</p>

        </div>
    </div>
  )
}

export default Message