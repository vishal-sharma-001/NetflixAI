import { IMG_PATH } from '../utils/config';
import ExpandedCard from './ExpandedCard';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { addPlayingMovieId } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const MoviesCards = ({ prop, expandCardId, setExpandCardId }) => {
  const dispatch = useDispatch()
  const timeoutRef = useRef(null);
  const cardRef = useRef(null);
  const [cardPosition, setCardPosition] = useState(null);

  if (prop == null) return null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);

    if (expandCardId !== prop.id) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardPosition({
        top: rect.top + window.scrollY,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });

      timeoutRef.current = setTimeout(() => {
        setExpandCardId(prop.id);
      }, 1000);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setExpandCardId(null);
    setCardPosition(null);
  };

  return (
    <div
      ref={cardRef}
      className="relative cursor-pointer w-96 min-w-96 h-full rounded-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={()=> dispatch(addPlayingMovieId(prop.id))}
    >
      {expandCardId === prop.id && cardPosition ? (
        createPortal(
          <div
            className="absolute z-50 transition-transform duration-300 ease-in-out"
            style={{
              top: `${cardPosition.top - cardPosition.height * 0.3}px`,
              left: `${cardPosition.left - cardPosition.width * 0.1}px`,
              width: `${cardPosition.width * 1.6}px`,
              height: `${cardPosition.height * 1.6}px`,
            }}
          >
            <ExpandedCard prop={prop} />
          </div>,
          document.body
        )
      ) : (
        <img
          className="w-full h-full object-fill rounded-md shadow-lg"
          src={`${IMG_PATH}${prop.backdrop_path}`}
          alt="IMG"
        />
      )}
    </div>
  );
};

export default MoviesCards;
