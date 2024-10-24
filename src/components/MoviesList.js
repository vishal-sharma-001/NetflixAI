import React from 'react'
import MoviesCards from './MoviesCards'

const MoviesList = ({prop, title}) => {
    const moviesList = prop
  return (
        <div className='md:mx-16'>  
            <h1 className='text-white text-xl w-[40%] md:text-3xl my-4'>{title}</h1>
            <div className='flex justify-between overflow-x-scroll mb-20 bg-black no-scrollbar'>
                {moviesList.map((movie)=>{
                    return <MoviesCards key={movie.id} prop={movie}/>
                })}
            </div>
        </div>
  )
}

export default MoviesList