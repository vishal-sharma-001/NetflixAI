import React from 'react'
import { useSelector } from 'react-redux'
import MovieInfoContainer from './MovieInfoContainer';
import MovieVideoContainer from './MovieVideoContainer';

function MainContainer() {
  const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMovies)
  if (!nowPlayingMovies) return null

  const movie = nowPlayingMovies[0]
  return (
    <div className='flex justify-between'>
      <MovieInfoContainer prop={movie}/>
      <MovieVideoContainer prop={movie.id}/>
    </div>
  )
}

export default MainContainer