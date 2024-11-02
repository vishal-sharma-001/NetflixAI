import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    initialState: {
        nowPlayingMovies :  null,
        trailerVideos: {},
        popularMovies : null,
        topRatedMovies: null,
        upcomingMovies: null,
        moviesInfo:{},
        playingMovieId: null
    },
    name: "movies",
    reducers: {
        addNowPlayingMovies: (state, action) => { state.nowPlayingMovies = action.payload},
        addTrailerVideo: (state, action) =>  {
            const { id, videoData } = action.payload;
            state.trailerVideos[id] = videoData;
        },
        addMovieInfo: (state, action) =>  {
            const { id, movieInfo } = action.payload;
            state.moviesInfo[id] = movieInfo;
        },
        addPopularMovies: (state, action) => { state.popularMovies = action.payload},
        addTopRatedMovies: (state, action) => { state.topRatedMovies = action.payload},
        addUpcomingMovies: (state, action) => { state.upcomingMovies = action.payload},
        addPlayingMovieId: (state, action) => { state.playingMovieId = action.payload},
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMovieInfo, addPlayingMovieId} = moviesSlice.actions;
export default moviesSlice.reducer;