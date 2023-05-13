import React from 'react'

const Navbar = () => {
    const style = {
        nav:'bg-gray-800 h-20 p-4 flex justify-between  items-center',
        heading: 'text-white text-2xl',
    }
  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Chat App</h1>
    </div>
  )
}

export default Navbar