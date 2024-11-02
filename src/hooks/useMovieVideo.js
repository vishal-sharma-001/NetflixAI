
import { API_OPTIONS } from '../utils/config';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useSelector } from 'react-redux'

const fetchMovieVideo = (dispatch, mov_id) => {
    fetch('https://api.themoviedb.org/3/movie/' + mov_id + '/videos?language=en-US', API_OPTIONS)
    .then(response => response.json())
    .then(response => {
        dispatch(addTrailerVideo({ id: mov_id, videoData: response.results.filter((mov)=> mov.type ==="Trailer")[0] }))
    })
    .catch(err => console.error(err));
}

const useMovieVideo = (mov_id) => {
    const video = useSelector((store) => store.movies.trailerVideos[mov_id])
    const dispatch = useDispatch()
    if(video) {
        return video;
    }
    
    fetchMovieVideo(dispatch, mov_id)
}

export default useMovieVideo