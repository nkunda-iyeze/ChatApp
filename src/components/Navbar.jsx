import React from 'react'
import { auth } from '../firebase'
import {useAuthState} from "react-firebase-hooks/auth"
import Login from './Login';
import Logout from './Logout';
const Navbar = () => {
  const [user] = useAuthState(auth);
    const style = {
        nav:'bg-gray-800 h-20 p-4 flex justify-between  items-center',
        heading: 'text-white text-2xl',
    }
  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Chat App</h1>
        {user ? <Logout/> : <Login/>}    
    </div>
  )
}

export default Navbar