import { useSelector } from 'react-redux'
import useMovieVideo from '../hooks/useMovieVideo'
import { addPlayingMovieId } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';
import { IoArrowBackOutline } from "react-icons/io5";


const PlayMovie = () => {
    const dispatch = useDispatch()  
    const playingMovieId = useSelector((store)=>store.movies.playingMovieId)
    const video = useMovieVideo(playingMovieId)

    if (!video) return null;
    return (
    <div className='z-50 absolute'>
        <IoArrowBackOutline className="text-white text-5xl absolute top-16 left-5 cursor-pointer" onClick={()=> dispatch(addPlayingMovieId(null))}/>
        <iframe
        className="w-screen h-screen index-0 overflow-hidden"
        title={video.title}
        src={
            "https://www.youtube.com/embed/" + video.key +
            "?autoplay=1&rel=0&iv_load_policy=3&fs=0&mute=1&loop=1"
        }
        />
    </div>
    )
}

export default PlayMovie