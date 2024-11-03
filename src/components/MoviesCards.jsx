import { IMG_PATH } from '../utils/config';
import ExpandedCard from './ExpandedCard';
import { useRef, useState } from 'react';
import { addPlayingMovieId } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const MoviesCards = ({ prop, expandCardId, setExpandCardId }) => {
  const dispatch = useDispatch();
  const timeoutRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (!prop) return null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    if (expandCardId !== prop.id) {
      timeoutRef.current = setTimeout(() => {
        setExpandCardId(prop.id);
        setIsExpanded(true);
      }, 1000);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setExpandCardId(null);
    setIsExpanded(false);
  };

  return (
    <div className="relative cursor-pointer h-[300px] rounded-md min-w-[500px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => dispatch(addPlayingMovieId(prop.id))}>
      <img className="w-full h-full object-cover rounded-md shadow-lg" src={`${IMG_PATH}${prop.backdrop_path}`} alt="IMG" />
      {isExpanded && (
        <div className="absolute top-0 left-0 z-50 transform w-[100%] transition-transform duration-300 ease-in-out pointer-events-none">
          <div className="w-full h-full bg-white rounded-md shadow-lg overflow-hidden">
            <ExpandedCard prop={prop} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesCards;
