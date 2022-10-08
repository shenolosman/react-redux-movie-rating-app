import "./App.scss";
import React from "react";
import {  Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
function App() {
  return (
    <div className="app">
        <Header />
        <Switch>
          <Route exact  path="/"  component={Home}/>
          <Route path="/movie/:imdbID" component={MovieDetail}/>
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
