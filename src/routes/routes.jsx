import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Series from "../pages/series";
import Home from "../pages/Home";
import Search from "../pages/search";
import Movies from "../pages/movies";
import Login from "../pages/login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRoutes";
import MovieInfo from "../pages/movieInfo";
import Profile from "../pages/profile";

const Routering = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />
        <Route
          path="/series"
          element={
            <PrivateRouter>
              <Series />
            </PrivateRouter>
          }
        />
        <Route
          path="/filmes"
          element={
            <PrivateRouter>
              <Movies />
            </PrivateRouter>
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRouter>
              <Search />
            </PrivateRouter>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/users"
          element={
            <PrivateRouter>
              <Profile />
            </PrivateRouter>
          }
        />

        <Route
          path="/movie/:id"
          element={
            <PrivateRouter>
              <MovieInfo />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routering;
