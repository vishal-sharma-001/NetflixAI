import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const CarouselContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
  const popularMovies = useSelector((store) => store.movies.popularMovies)
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies)

  return (
    <div className=' bg-black h-auto'>
      <div className='relative left-0 md:bottom-60 z-10'>
        {nowPlayingMovies ? <MoviesList prop={nowPlayingMovies} title="Now Playing" /> : null}
        {popularMovies ? <MoviesList prop={popularMovies} title="Popular" /> : null}
        {topRatedMovies ? <MoviesList prop={topRatedMovies} title="Top Rated" /> : null}
        {upcomingMovies ? <MoviesList prop={upcomingMovies} title="Upcoming" /> : null}
      </div>
    </div>
  )
}

export default CarouselContainer