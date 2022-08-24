import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Series from "../pages/Series";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Movies from "../pages/Movies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRoutes";
import MovieInfo from "../pages/MovieInfo";
import Profile from "../pages/Profile";

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
