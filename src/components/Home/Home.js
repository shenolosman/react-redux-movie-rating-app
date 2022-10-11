import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies,fetchAsyncSeries } from "../../features/movies/movieSlice";
const Home = () => {
  const movieText="Harry";
  const showText="Friends"
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncSeries(showText));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"> </div>
      <MovieListing />
    </div>
  );
};

export default Home;
