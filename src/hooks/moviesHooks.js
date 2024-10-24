import { useEffect } from 'react'
import {API_OPTIONS} from "../utils/config"
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from '../utils/moviesSlice'

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
          fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
          .then(response => response.json())
          .then(response => {
            dispatch(addNowPlayingMovies(response?.results))
          })
          .catch(err => console.error(err));
    },[])
}

export const usePopularMovies= () => {
  const dispatch = useDispatch()
  useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        .then(response => response.json())
        .then(response => {
          dispatch(addPopularMovies(response?.results))
        })
        .catch(err => console.error(err));
  },[])
}

export const useTopRatedMovies= () => {
  const dispatch = useDispatch()
  useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        .then(response => response.json())
        .then(response => {
          dispatch(addTopRatedMovies(response?.results))
        })
        .catch(err => console.error(err));
  },[])
}

export const useUpcomingMovies = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        .then(response => response.json())
        .then(response => {
          dispatch(addUpcomingMovies(response?.results))
        })
        .catch(err => console.error(err));
  },[])
}