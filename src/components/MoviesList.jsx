import { useState } from 'react';
import MoviesCards from './MoviesCards';

const MoviesList = ({ prop, title }) => {
    const [expandCardId,setExpandCardId] = useState(null)

    return (
        <div className="md:mx-5 ">  
            <h1 className="text-white text-xl w-[40%] md:text-3xl my-4">{title}</h1>
            <div className="flex space-x-3 mb-14 bg-zinc-900 w-screen overflow-">
                {prop.map((movie) => (
                    <MoviesCards 
                        key={movie.id} 
                        prop={movie}
                        expandCardId={expandCardId}
                        setExpandCardId = {(id) => setExpandCardId(id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MoviesList;
