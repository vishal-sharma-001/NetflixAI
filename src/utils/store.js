import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './usersSlice'
import moviesReducer from "./moviesSlice"
import aiSliceReducer from "./aiSlice"

const store = configureStore({
    reducer:{
        users: usersReducer,
        movies: moviesReducer,
        aiResults: aiSliceReducer
    }
})

export default store;