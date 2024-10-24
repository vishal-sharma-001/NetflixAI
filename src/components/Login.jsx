import React, {useRef, useState} from 'react'
import validate from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase';
import { addUser } from '../utils/usersSlice';
import { useDispatch } from "react-redux";
import {BG_IMG} from "../utils/config"

const Login = () => {
  const [signUp, setSignUp] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const dispatch = useDispatch()

  const handleSignUp = () => {
    setSignUp(!signUp)
  }
  const email = useRef(null)  
  const password = useRef(null)
  const fullname = useRef(null)

  const handleSubmit = () => {
    // validate
    const result = validate(email?.current?.value, password?.current?.value, fullname?.current?.value)
    setErrorMsg(result)
    if(result) return;

    // signin - signup
    if(signUp){
      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then(() => {
          updateProfile(auth.currentUser, {displayName: fullname?.current?.value})
            .then(() => {
              const user = auth.currentUser
              dispatch(addUser({uid : user.uid, email : user.email, displyName: user.displayName}))
            })
            .catch((error) => {
              setErrorMsg(error.message)
            }); 
        })
        .catch((error) => { 
          setErrorMsg(error.message)
        }); 
    }else{
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
      .then(() => {
      })
      .catch((error) => {
        setErrorMsg(error.message)
      });
    }
  }

  return (
    <div className='flex justify-center'>
      <img className="object-cover fixed h-screen w-screen z-0" src={BG_IMG} alt='netflix-bg' />
      <form className='absolute top-20  w-screen md:w-1/2 lg:w-1/4 h-auto  bg-black bg-opacity-85 flex flex-col p-10 md:p-20 text-center' onSubmit={(e)=> e.preventDefault()}>
          
          <label className='text-white font-extrabold text-2xl flex'>{signUp ? "Sign Up" : "Sign In"}</label>
          {signUp ? <input className='my-5 rounded-md h-12 bg-black bg-opacity-0 border-2 border-[rgb(58,57,55)]  text-white outline-none focus:border-white placeholder-gray-300 p-3' placeholder="Full Name" type="text" ref={fullname}/> : <></>}
          <input className='my-5 rounded-md h-12 bg-black bg-opacity-0 border-2 border-[rgb(58,57,55)]  text-white outline-none  focus:border-white placeholder-gray-300 p-3'  placeholder="Email or mobile number" type="text" ref={email} />
          <input className='my-5 rounded-md h-12 bg-black bg-opacity-0 border-2 border-[rgb(58,57,55)]  text-white outline-none focus:border-white placeholder-gray-300   p-3' placeholder="Password" type='password' ref={password}/>
          <input className='my-5 h-12 rounded-md bg-[rgb(229,8,33)] text-white hover:bg-red-700' type='button' value={ signUp ?  "Sign Up" : "Sign In"} onClick={handleSubmit}/>
          <label className='text-slate-400'>OR</label>
          <input className='my-5 h-12 rounded-md bg-[rgb(153,134,136)] bg-opacity-40 text-white hover:bg-opacity-30' type='button' value="Use a sign-in code"/>
          <label className='text-white'>Forgot password?</label>
          
          <div className='flex my-5'>
            <input type='checkbox' className='mr-2' id='check'/>
            <label className=' text-white' htmlFor='check'>Remember me</label>
          </div>

          <label onClick={handleSignUp}  className=' text-white flex'>
            { signUp ?  "Already registered? Sign in now." : "New to Netflix? Sign up now." }
          </label>
          {errorMsg == null ? <></> : <p className='text-red-600 flex my-3'>{errorMsg}</p>}
      </form>
    </div>
  )
} 

export default Login