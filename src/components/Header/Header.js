import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncSeries } from "../../features/movies/movieSlice";
import userImg from "../../images/user.png";
import "./Header.scss";
const Header = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  // const removeExtraSpace = (s) => s.trim().split(/ +/).join(" ");
  // const newTerm = removeExtraSpace(term);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (term === "") return;
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
    setTerm("");
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={term}
            placeholder="Search"
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={userImg} alt="user" />
      </div>
    </div>
  );
};

export default Header;
