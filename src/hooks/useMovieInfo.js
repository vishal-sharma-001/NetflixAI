import { API_OPTIONS } from '../utils/config';
import { useDispatch } from 'react-redux';
import { addMovieInfo } from '../utils/moviesSlice';
import { useSelector } from 'react-redux'

const useMovieInfo = (mov_id) => {
    const movieInfo = useSelector((store) => store.movies.moviesInfo[mov_id])
    const dispatch = useDispatch()
    if(movieInfo) {
        return movieInfo;
    }
    fetch('https://api.themoviedb.org/3/movie/' + mov_id + '?language=en-US', API_OPTIONS)
    .then(response => response.json())
    .then(response => {
        dispatch(addMovieInfo({ id: mov_id, movieInfo: response}))
    })
    .catch(err => console.error(err));
}

export default useMovieInfo



