import React,{useRef} from 'react'
import {API_OPTIONS, BG_IMG} from '../utils/config'
import model from '../utils/gemini'
import { useDispatch } from 'react-redux';
import { addRecommendedMovies, clearResult} from '../utils/aiSlice';
import RecommendedMovies from './RecommendedMovies';



const AiSearch = () => {
  const search = useRef('')
  const dispatch = useDispatch()

  const fetchMovies = async(movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json()
    return json?.results[0];
  }

  const handleSearchClick = async () => {
    dispatch(clearResult())
    if(search.current.value === '')
        return
    const query = "You are a movie recommendation system. Based on the following user input, provide a comma-separated list of up to 20 movie titles. The user's query is: '" + search.current.value + "'. Do not ask any further questions. If you cannot generate any recommendations based on the provided input, simply return any random movie names.";
    const result = await model.generateContent(query)
    const data = await Promise.all(result.response.text().split(",").map((movie)=> fetchMovies(movie)))
    dispatch(addRecommendedMovies(data))
  }
  
  return (
    <div className='w-screen text-black h-auto p-0 m-0 overflow-x-hidden'>
      <img className="w-screen h-screen min-h-screen min-w-screen object-cover fixed top-0 left-0 z-0" src={BG_IMG} alt='netflix-bg' />
      <form className='flex relative top-[40%] md:w-1/2 h-12 md:mx-[25%] w-full mx-0 z-10 mt-80 mb-20 overflow-x-hidden' onSubmit={(e)=> e.preventDefault()}>
        <input className="outline-none rounded-s-lg sm p-2 w-[80%] w-min-[90%]" type='text' ref={search} placeholder="Looking for a movie?"/>
        <button className='rounded-e-lg w-[20%] w-min-[10%] p-2 font-semibold bg-red-700 text-white outline-none' onClick={() => handleSearchClick()}> Search </button> 
      </form>
      <RecommendedMovies/>
    </div>
  )
}

export default AiSearch