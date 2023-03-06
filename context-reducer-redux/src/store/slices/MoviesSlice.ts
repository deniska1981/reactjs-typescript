import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

type MoviesState = string[];

const initialState: MoviesState = ["Umri muski", "Brave heart"];

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        izbaciPrviFilm: (state) => {
            state.shift();
        },
        addMovie: (state, action: PayloadAction<string>) => {
            state.push(action.payload);
        },
    },
});

export const { izbaciPrviFilm, addMovie } = moviesSlice.actions;

//export const selectMovies = (state: RootState) => state.movies;

export default moviesSlice.reducer;