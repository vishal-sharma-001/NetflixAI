import React from 'react';
import { IMG_PATH } from '../utils/config';

const MoviesCards = ({prop}) => (
  <div className="w-32 lg:w-56 min-w-32 lg:min-w-56 h-full transform transition duration-300 hover:scale-105">
    <img className="w-full h-full object-fill" src={`${IMG_PATH}${prop.poster_path}`} alt={prop.title}/>
  </div>
);

export default MoviesCards;
