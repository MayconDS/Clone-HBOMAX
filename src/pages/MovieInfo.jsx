import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

import { BsWallet2 } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { BsHourglassSplit } from "react-icons/bs";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BsEasel } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";

import "../styles/MovieInfo.css";

const VITE_API_KEY = "0d0a0a2eaca06b1d8d0b66cb7be22c3c";
const VITE_API_MOVIE = "https://api.themoviedb.org/3/movie/";
const VITE_API_TV = "https://api.themoviedb.org/3/tv/";

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [tv, setTv] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };
  const getTv = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTv(data);
  };

  useEffect(() => {
    const urlTv = `${VITE_API_KEY}${id}?api_key=${VITE_API_KEY}&language=pt-BR`;
    const urlMovie = `${VITE_API_MOVIE}${id}?api_key=${VITE_API_KEY}&language=pt-BR`;
    getTv(urlTv);
    getMovie(urlMovie);
  }, []);

  const handleAdds = async () => {
    let moviesList = JSON.parse(localStorage.getItem("movies") || "[]");

    if (moviesList.find((item) => item.id === movie.id)) {
      return alert("So pode ser adicionado uma vez");
    }
    moviesList.push({
      name: movie.title ? movie.title : tv.title,
      url: movie.poster_path ? movie.poster_path : tv.poster_path,
      id: movie.id,
    });

    localStorage.setItem("movies", JSON.stringify(moviesList));
  };

  return (
    <Fragment>
      <Navbar />
      <section>
        <div className="movie-container">
          {movie && (
            <>
              <div className="poster">
                <h1>{movie.title ? movie.title : tv.name}</h1>

                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    movie.poster_path ? movie.poster_path : tv.poster_path
                  }`}
                  alt=""
                />
              </div>

              <div className="card-info">
                <button onClick={handleAdds} id="btn">
                  {" "}
                  <IoMdAdd />
                  ADICIONAR AOS FAVORITOS
                </button>
                <div className="info">
                  <p>
                    <AiFillStar />{" "}
                    {movie.vote_average ? movie.vote_average : tv.vote_average}
                  </p>
                </div>

                {movie.success == false ? (
                  <div className="info">
                    <h3>
                      <BsEasel /> Temporadas
                    </h3>
                    <p>{tv.number_of_seasons}</p>
                  </div>
                ) : (
                  <div className="info">
                    {" "}
                    <h3>
                      <BsWallet2 /> Orçamento:
                    </h3>
                    <p>{movie.budget}</p>
                  </div>
                )}
                {tv ? (
                  <div className="info">
                    <h3>
                      <BsFillCalendarDateFill />
                      Lançamento:
                    </h3>
                    <p>
                      {tv.first_air_date
                        ? tv.first_air_date
                        : movie.release_date}
                    </p>
                  </div>
                ) : null}
                {movie.revenue ? (
                  <div className="info">
                    <h3>
                      <BsGraphUp /> Receita:
                    </h3>
                    <p>{movie.revenue}</p>
                  </div>
                ) : null}

                {movie.runtime ? (
                  <div className="info">
                    <h3>
                      <BsHourglassSplit /> Duração:
                    </h3>
                    <p>{movie.runtime} minutos</p>
                  </div>
                ) : null}

                <div className="info description">
                  <h3>
                    {" "}
                    <BsFillFileEarmarkTextFill /> Descrição
                  </h3>
                  <p>{movie.overview ? movie.overview : tv.overview}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default MovieInfo;
