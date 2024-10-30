import MoviesCards from './MoviesCards';

const MoviesList = ({ prop, title }) => {

    return (
        <div className="md:mx-5">  
            <h1 className="text-white text-xl w-[40%] md:text-3xl my-4">{title}</h1>
            <div className="flex space-x-2 mb-20 bg-black w-screen overflow-y-hidden overflow-x-scroll no-scrollbar">
                {prop.map((movie) => (
                    <MoviesCards 
                        key={movie.id} 
                        prop={movie} 
                    />
                ))}
            </div>
        </div>
    );
};

export default MoviesList;
