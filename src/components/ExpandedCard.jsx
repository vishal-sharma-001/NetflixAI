import React from 'react'
import MovieVideoContainer from './MovieVideoContainer'
import MovieDetails from './MovieDetails';


const ExpandedCard = ({ prop }) => {
    return ( 
      <div className="flex flex-col w-[80%] h-[120%] rounded-sm shadow-lg cursor-pointer">
        <div className="h-[70%] bg-slate-50 w-full rounded-sm overflow-hidden">
          <MovieVideoContainer prop={prop.id} styleProp="pointer-events-none h-[140%] aspect-video relative right-32 bottom-16"/>
        </div>
        <div className='h-[30%] bg-zinc-900 w-full rounded-sm'>
          <MovieDetails prop={prop.id}/>
        </div>
      </div>
    )
}

export default ExpandedCard
