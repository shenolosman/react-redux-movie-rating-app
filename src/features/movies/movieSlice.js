import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (term) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);
  return response.data;
});
export const fetchAsyncSeries = createAsyncThunk("movies/fetchAsyncSeries", async (term) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);
  return response.data;
});

export const fetchAsyncDetail = createAsyncThunk("movies/fetchAsyncDetail", async (id) => {
  const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
  return response.data;
});
const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow:{}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeSelectMovieOrShow:(state)=>{
    state.selectMovieOrShow={}}
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
        console.log("fetched successfully");
        return { ...state, selectMovieOrShow: payload };
      },
  },
});

export const { removeSelectMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
