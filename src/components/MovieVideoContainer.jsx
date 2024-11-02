import React from 'react'
import useMovieVideo from '../hooks/useMovieVideo'

const MovieVideoContainer = ({ prop, styleProp }) => {
  const video = useMovieVideo(prop)
  if (!video) return null;
  return (
      <iframe
        className={styleProp}
        title={video.title}
        src={
          "https://www.youtube.com/embed/" + video.key +
          "?autoplay=1&controls=0&rel=0&iv_load_policy=3&fs=0&mute=1&loop=1"
        }
      />
  )
}

export default MovieVideoContainer
