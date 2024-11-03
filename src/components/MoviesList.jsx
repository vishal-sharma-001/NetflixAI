import { useRef, useState } from 'react';
import MoviesCards from './MoviesCards';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing the icons

const MoviesList = ({ prop, title }) => {
    const [expandCardId, setExpandCardId] = useState(null);
    const scrollRef = useRef(null);
    const scrollAmount = window.innerWidth * 0.7;

    const scrollLeft = () => scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    const scrollRight = () => scrollRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    return (
        <div className="relative">
            <h1 className="text-white text-xl w-[40%] md:text-3xl my-4 mx-5 ">{title}</h1>
            <div className="relative mb-14 bg-zinc-900 flex items-center group">
                <div onClick={scrollLeft} className="h-full w-10 flex items-center justify-center cursor-pointer z-10 bg-black bg-opacity-50 transition duration-200 opacity-0 group-hover:opacity-100 hover:bg-opacity-70" style={{ position: 'absolute', left: '0' }}>
                    <FaChevronLeft className="text-white text-2xl transition duration-200 group-hover:text-gray-300 group-hover:scale-110" />
                </div>
                <div ref={scrollRef} className="flex space-x-3 overflow-x-auto hide-scrollbar mx-5" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
                    {prop.map(movie => <MoviesCards key={movie.id} prop={movie} expandCardId={expandCardId} setExpandCardId={setExpandCardId} />)}
                </div>
                <div onClick={scrollRight} className="h-full w-10 flex items-center justify-center cursor-pointer z-10 bg-black bg-opacity-50 transition duration-200 opacity-0 group-hover:opacity-100 hover:bg-opacity-70" style={{ position: 'absolute', right: '0' }}>
                    <FaChevronRight className="text-white text-2xl transition duration-200 group-hover:text-gray-300 group-hover:scale-110" />
                </div>
            </div>
        </div>
    );
};

export default MoviesList;
