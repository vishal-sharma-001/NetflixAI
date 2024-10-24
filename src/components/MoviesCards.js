import React from 'react'
import { IMG_PATH } from '../utils/config'
const MoviesCards = ({prop}) => {
  return (
      <img className='mr-4 w-40 md:w-80 mb-2 transform transition-transform duration-300 hover:scale-95' src={IMG_PATH + prop.poster_path} alt={prop.title}/>
  )
}

export default MoviesCards