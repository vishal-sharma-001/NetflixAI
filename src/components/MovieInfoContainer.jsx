import React from 'react'
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { addPlayingMovieId } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const MovieInfoContainer = ({ prop }) => {
  const dispatch = useDispatch()
  if (!prop) return null
  
  const movie = prop
  return (
    <div className='text-white absolute z-20 top-20 left-5 sm:top-52 md:top-24  lg:top-36 xl:top-72 2xl:top-96 sm:left-10 w-[20%] sm:w-[50%]'>
      <h1 className='text-lg  hidden sm:inline md:text-3xl'>{movie.title}</h1>
      <h1 className='hidden lg:inline-block md:text-base my-3 h-[50px] 2xl:h-[70px] overflow-hidden'>{movie.overview}</h1>
      <div className='flex'>
        <button className='flex justify-center bg-white bg-opacity-90 p-2 lg:py-3 md:px-7 text-sm font-light md:text-lg w-15 md:w-36 rounded-md my-3 mr-4 text-black ' onClick={()=> dispatch(addPlayingMovieId(prop.id))}> <FaPlay className='inline-block text-base mt-1 md:text-2xl mx-1' /><span className='md:text-xl font-medium'>Play</span></button>
        <button className='hidden md:flex justify-center bg-white bg-opacity-30 py-3 w-44 rounded-md my-3 text-white'> <AiOutlineInfoCircle className='inline-block text-3xl mx-1 ' /><span className='text-xl font-medium'>More Info</span></button>
      </div>
    </div>
  )
}

export default MovieInfoContainer