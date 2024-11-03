import React from 'react'
import MovieVideoContainer from './MovieVideoContainer'
import MovieDetails from './MovieDetails';


const ExpandedCard = ({ prop }) => {
    return ( 
      <div className="flex flex-col rounded-md shadow-lg cursor-pointer">
        <div className=" bg-slate-50 w-full overflow-hidden h-[300px]">
          <MovieVideoContainer prop={prop.id} styleProp="pointer-events-none aspect-video relative w-[150%] -top-14 -left-32"/>
        </div>
        <div className='bg-zinc-900 w-full absolute bottom-0 opacity-50 h-[100px]'>
          <MovieDetails prop={prop.id}/>
        </div>
      </div>
    )
}

export default ExpandedCard
