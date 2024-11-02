import React from 'react'
import {useNowPlayingMovies, usePopularMovies, useTopRatedMovies, useUpcomingMovies} from '../hooks/moviesHooks'
import MainContainer from './MainContainer'
import CarouselContainer from "./CarouselContainer"
import AiSearch from './AiSearch'
import {useSelector } from 'react-redux'
import PlayMovie from './PlayMovie'
const Browse = () => {
  const showAiSearch = useSelector((store)=>store.aiResults.showAiSearch)
  const playingMovieId = useSelector((store)=>store.movies.playingMovieId)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  return (
    <div>
      {
        playingMovieId ? <PlayMovie/> :
        <div>
          {  showAiSearch ?  <AiSearch/> :
            <div className='bg-zinc-900 overflow-hidden'>
              <MainContainer/>
              <CarouselContainer/>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Browse