import React from 'react'
import { useSelector } from 'react-redux'
import MovieInfoContainer from './MovieInfoContainer';
import MovieVideoContainer from './MovieVideoContainer';

function MainContainer() {
  const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMovies)
  if (!nowPlayingMovies) return null
  const movie = nowPlayingMovies[0]
  return (
    <div className='flex justify-between min-h-40'>
      <MovieInfoContainer prop={movie}/>
      <div className='relative md:-top-32 z-10'>
        <MovieVideoContainer prop={movie.id} styleProp="pointer-events-none w-screen aspect-video"/>
      </div>
    </div>
  )
}

export default MainContainer