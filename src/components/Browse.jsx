import React from 'react'
import {useNowPlayingMovies, usePopularMovies, useTopRatedMovies, useUpcomingMovies} from '../hooks/moviesHooks'
import MainContainer from './MainContainer'
import CarouselContainer from "./CarouselContainer"
import AiSearch from './AiSearch'
import {useSelector } from 'react-redux'
const Browse = () => {
  
  const showAiSearch = useSelector((store)=>store.aiResults.showAiSearch)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  return (
    <>
      {  showAiSearch ?  <AiSearch/> :
        <div className='bg-black overflow-hidden'>
          <MainContainer/>
          <CarouselContainer/>
        </div>
      }
    </>
  )
}

export default Browse