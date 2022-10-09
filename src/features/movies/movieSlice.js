import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movie = payload;
    },
  },
  // extraReducers:{}
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies
export default movieSlice.reducer;
