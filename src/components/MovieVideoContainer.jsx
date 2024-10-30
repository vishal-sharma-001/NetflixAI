import React from 'react'
import useMovieVideo from '../hooks/useMovieVideo'
import { useSelector } from 'react-redux'

const MovieVideoContainer = ({ prop }) => {
  useMovieVideo(prop)
  const video = useSelector((store) => store.movies.trailerVideo)
  if (!video) return null;
  return (
    <div className='relative md:-top-32 z-10'>
      <iframe
        className="pointer-events-none w-screen aspect-video" // Ensures full screen coverage and no interaction
        title={video.title}
        src={
          "https://www.youtube.com/embed/" + video.key +
          "?autoplay=1&controls=0&rel=0&iv_load_policy=3&fs=0&mute=1&loop=1"
        }
      />
    </div>
  )
}

export default MovieVideoContainer
