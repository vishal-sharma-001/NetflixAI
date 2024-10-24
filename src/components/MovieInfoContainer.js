import React from 'react'
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const MovieInfoContainer = ({ prop }) => {
  if (!prop) return null
  const movie = prop
  return (
    <div className='text-white absolute top-[30%] sm:top-[30%] md:top-[8%] lg:top-[25%] xl-top-[40%] left-[10%] w-[50%] z-20'>
      <h1 className='text-lg md:text-3xl'>{movie.title}</h1>
      <h1 className='hidden md:inline-block md:text-base my-3 h-20 overflow-ellipsis'>{movie.overview}</h1>
      <div className='flex'>
        <button className='flex justify-center bg-white bg-opacity-90 p-2 md:py-3 md:px-7 text-sm font-light md:text-lg w-15 md:w-36 rounded-md my-3 mr-4 text-black '> <FaPlay className='inline-block text-base mt-1 md:text-2xl mx-1' /><span className='md:text-xl font-medium'>Play</span></button>
        <button className='hidden md:flex justify-center bg-white bg-opacity-30 py-3 w-44 rounded-md my-3 text-white'> <AiOutlineInfoCircle className='inline-block text-3xl mx-1 ' /><span className='text-xl font-medium'>More Info</span></button>
      </div>
    </div>
  )
}

export default MovieInfoContainer