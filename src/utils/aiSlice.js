import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
    initialState:{  recommendedMovies: [],
        showAiSearch: false
    },
    name: "aiSlice",    
    reducers: {
        setShowAiSearch : (state, action) => {state.showAiSearch = action.payload},
        addRecommendedMovies : (state, action) => {state.recommendedMovies = action.payload},
        clearResult: (state, action) => {state.recommendedMovies = []}
    }
})

export const {setShowAiSearch, addRecommendedMovies, clearResult} = aiSlice.actions;
export default aiSlice.reducer