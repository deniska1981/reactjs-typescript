import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (name: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=ab8596081145bffa991ffe5317e1d3c4`,
      {
        headers: {
          accept: "application/json, text/plain, */*",
        },
        body: null,
        method: "GET",
      }
    );
    let data = await response.json();

    let finalData = data.results.map((clan: { title: string }) => clan.title);
    return finalData;
  }
);

type MoviesState = { status: string; results: string[] };

const initialState: MoviesState = {
  status: "idle",
  results: ["Umri muski", "Brave heart"],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    izbaciPrviFilm: (state) => {
      state.results.shift();
    },
    addMovie: (state, action: PayloadAction<string>) => {
      state.results.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.results.push(...payload);
    });
    builder.addCase(fetchMovies.pending, (state, { payload }) => {
      state.status = "loading";
    });
  },
});

export const { izbaciPrviFilm, addMovie } = moviesSlice.actions;

//export const selectMovies = (state: RootState) => state.movies;

export default moviesSlice.reducer;
