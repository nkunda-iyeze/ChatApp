import { auth } from '../firebase'
const style = {
    button: 'bg-gray-200 hover:bg-gray-100 px-4 py-2 rounded',
}
const Logout = () => {
const signOut = () =>{
   signOut(auth)

}
// console.log(signOut)
  return (
    <button className={style.button} onClick={()=> auth.signOut()}>Logout</button>
  )
}

export default Logout