import React from 'react'
import { IoIosPlayCircle } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { FaThumbsUp } from "react-icons/fa";
import { CiCircleChevDown } from "react-icons/ci";
import useMovieInfo from '../hooks/useMovieInfo';
import { useSelector } from 'react-redux';

const MovieDetails = ({prop}) => {
    useMovieInfo(prop)
    const movieInfo = useSelector((store) => store.movies.moviesInfo[prop])
  return (
    <div className='flex flex-col text-white text-5xl px-3'>
        <div className='flex flex-row justify-between pb-2'>
            <div className='flex flex-row w-[70%] space-x-3 p-1'>
                <IoIosPlayCircle/>
                <CiCirclePlus />
                <FaThumbsUp className='text-4xl pt-1'/>
            </div>
            <CiCircleChevDown className='pt-2'/>
        </div>
        <div className='flex felx-row'>
        {
            movieInfo?.genres.map((genre)=>{
                return <p key={genre['id']} className='text-sm pr-2'>{genre['name']}</p>
            })
        }

        </div>
    </div>
  )
}

export default MovieDetails