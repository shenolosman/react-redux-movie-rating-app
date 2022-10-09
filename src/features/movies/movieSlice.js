import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
  const movieText = "Harry";
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
  return response.data;
});
export const fetchAsyncSeries = createAsyncThunk("movies/fetchAsyncSeries", async () => {
  const movieText = "Friends";
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=series`);
  return response.data;
});
const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      console.log("payload: ", payload);
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      console.log("payload: ", payload);
      return { ...state, shows: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
