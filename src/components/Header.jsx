import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { auth } from "../utils/firebase";
import { signOut } from 'firebase/auth';
import {LOGO, PROFILE} from "../utils/config"
import { clearResult, setShowAiSearch} from '../utils/aiSlice'
import { useDispatch, useSelector } from 'react-redux';
  
const Header = () => {
  const showAiSearch = useSelector((store)=>store.aiResults.showAiSearch)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setShowAiSearch(!showAiSearch))
    dispatch(clearResult())
  }

  const handleLogOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
        return error
    });
  }


  return (
    <div className="absolute z-10 w-full py-2 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between items-center">
        <img className="w-52 h-auto min-w-52" src={LOGO} alt='netflix-logo' />
        {auth.currentUser ? 
          <div className='flex'>
            <button className="font-semibold rounded-md p-2 bg-red-700 text-white outline-none mx-5" onClick={handleClick}> {!showAiSearch ? "Ask AI" : "Home"} </button>
            <div className='flex hover:cursor-pointer' onClick={handleLogOut}>
            <img className='w-9 h-9 flex' src={PROFILE} alt="users"/>
            <IoMdArrowDropdown className='mt-3 mx-1 text-white'/>
          </div> 
        </div>: <></>}
    </div>
  )
}

export default Header