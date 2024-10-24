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
      <div className='relative bottom-[500px] sm:bottom-[500px] md:[600px] lg:bottom-[300px] 2xl:bottom-[100px] md:top-[35%] left-0 z-20'>
        {nowPlayingMovies ? <MoviesList prop={nowPlayingMovies} title="Now Playing" /> : null}
        {popularMovies ? <MoviesList prop={popularMovies} title="Popular" /> : null}
        {topRatedMovies ? <MoviesList prop={topRatedMovies} title="Top Rated" /> : null}
        {upcomingMovies ? <MoviesList prop={upcomingMovies} title="Upcoming" /> : null}
      </div>
    </div>
  )
}

export default CarouselContainer