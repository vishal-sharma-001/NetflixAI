import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { auth } from "../utils/firebase";
import { signOut } from 'firebase/auth';
import {LOGO} from "../utils/config"
import {BG_IMG} from "../utils/config"

const Header = () => {
  const handleLogOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className="absolute w-full px-32 py-2 bg-gradient-to-b from-black flex justify-between items-center">
        <img className="w-52 h-auto min-w-52" src={LOGO} alt='netflix-logo' />
        {auth.currentUser ? <div className='flex hover:cursor-pointer' onClick={handleLogOut}>
          <img className='w-9 h-9 flex' src={BG_IMG} alt="users"/>
          <IoMdArrowDropdown className='mt-3 mx-1 text-white'/>
        </div> : <></>}
    </div>
  )
}

export default Header