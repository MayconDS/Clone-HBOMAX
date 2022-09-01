import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProfileEdit from "../components/ProfileEdit";
import Navbar from "../components/Navbar";

import "../styles/profile.css";

const Profile = () => {
  // Armazena filmes/series adicionados como favoritos do localStorage
  const [moviesFav, setMoviesFav] = useState(
    JSON.parse(localStorage.getItem("todos"))
  );

  // Função para remover o filme/serie do localStorage
  const removeMovie = (id) => {
    let newArray = moviesFav.filter((item) => item.id != id.target.value);
    localStorage.setItem("movies", JSON.stringify(newArray));
    setMoviesFav(newArray);
  };

  useEffect(() => {
    const favoriteMovie = () => {
      setMoviesFav(JSON.parse(localStorage.getItem("movies")));
    };

    favoriteMovie();
  }, []);

  return (
    <Fragment>
      <Navbar />

      <div className="container-profile">
        <div className="box-config">
          <ProfileEdit />
        </div>
        <div className="box-list">
          <div className="profile-text">
            <h1>Minha Lista</h1>
            <hr />
          </div>
          <div className="list-movies">
            {moviesFav &&
              moviesFav.map((item, key) => (
                <div className="movies">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/movie/${item.id}`}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.url}`}
                      alt=""
                    />
                  </Link>
                  <div className="delete">
                    <button
                      id="buttonRemove"
                      value={item.id}
                      onClick={removeMovie}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Profile;
