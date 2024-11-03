import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { auth } from "../utils/firebase";
import { signOut } from 'firebase/auth';
import {LOGO, PROFILE} from "../utils/config"
import { clearResult, setShowAiSearch} from '../utils/aiSlice'
import { useDispatch, useSelector } from 'react-redux';
  
const Header = () => {
  const [showUserMenu,setShowUserMenu] = useState()
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
    <div className="absolute z-30 w-full py-2 bg-gradient-to-b from-black flex flex-col sm:flex-row justify-between items-center">
        <img className="w-32 sm:w-52 h-auto" src={LOGO} alt='netflix-logo' />
        {auth.currentUser && 
          <div className='flex  sm:mr-20'>
            <button className="font-semibold rounded-md p-2 bg-red-700 text-white outline-none mx-5 text-sm sm:text-base" onClick={handleClick}> {!showAiSearch ? "Ask AI" : "Home"} </button>
            <div className='flex hover:cursor-pointer' onMouseEnter={() => setShowUserMenu(true)} onMouseLeave={() =>setShowUserMenu(false)}>
              <img className='w-9 h-9 flex' src={PROFILE} alt="users"/>
              { !showUserMenu ?<IoMdArrowDropdown className='mt-3 mx-1 text-white'/> : <IoMdArrowDropup className='mt-3 mx-1 text-white'/>}
              {
                showUserMenu && 
                <div className='absolute sm:right-[90px] sm:top-16 top-18 min-h-10 h-auto w-40 flex flex-col items-center'>
                  <IoMdArrowDropup className=' text-white relative left-12 text-2xl'/>
                  <div className=' bg-black z-40  bg-opacity-80 text-white w-[100%]'>
                    <p onClick={handleLogOut} className='p-3 text-sm'>Sign out</p>
                  </div>
                </div>
              }
            </div>
          </div>
        }
    </div>
  )
}

export default Header