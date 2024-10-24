import {useEffect} from 'react'
import { API_OPTIONS } from '../utils/config';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';


const useMovieVideo = (mov_id) => {
    const dispatch = useDispatch()
    useEffect(()=> {
        fetch('https://api.themoviedb.org/3/movie/' + mov_id + '/videos?language=en-US', API_OPTIONS)
        .then(response => response.json())
        .then(response => {
            dispatch(addTrailerVideo(response.results.filter((mov)=> mov.type ==="Trailer")[0]))
        })
        .catch(err => console.error(err));
    },[])
}

export default useMovieVideo