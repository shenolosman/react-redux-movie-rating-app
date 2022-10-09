import React, { useEffect, useState } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    const movieText = "Harry";
   
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((e) => {
        console.log("Error:",e);
      });
      // console.log("Response from api:",response);
      dispatch(addMovies(response.data))
    };
      fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"> </div>
      <MovieListing />
    </div>
  );
};

export default Home;
