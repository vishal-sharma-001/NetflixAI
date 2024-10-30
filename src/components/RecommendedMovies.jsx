import React from 'react'
import { useSelector } from 'react-redux'
import MoviesCards from './MoviesCards'

const RecommendedMovies = () => {
  const recommendedMovies = useSelector((store)=> store.aiResults.recommendedMovies)
  if (recommendedMovies == null || recommendedMovies.length === 0)
      return null
  return (
    <div className='flex flex-wrap bg-black rounded-3xl bg-opacity-60 mx-2 p-5 w-auto h-auto z-10 relative justify-center overflow-x-hidden space-x-3 space-y-2'>
      {recommendedMovies.map((movie)=> {
        return movie ? <MoviesCards key={movie.id} prop={movie}/> : null})}
    </div>
  )
}

export default RecommendedMovies