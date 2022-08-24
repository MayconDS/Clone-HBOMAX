import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "./MovieRow.css";

export default ({ title, title2, items, items2, searchActive = false }) => {
  // (title) é o h1 que fica em cima do filme caso seja passado, atraves da requisição como um label
  // (title2) é o span que fica em cima do filme caso seja passado, atraves da requisição como um label
  // (items) é o array de filmes
  // (items2) é o array de filmes é series, no caso da requisição seja na page de search
  // (searchActive) é a condição que se for true, ele renderiza a lista de filmes/series um abaixo do outro, ao invés de linhas com carrossel

  // scrollX para setar o direcionamento do carrossel
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 223;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <p>{title2}</p>
      {scrollX === 0 ? (
        ""
      ) : (
        <div
          style={{ fontSize: 50 }}
          className="movieRow-left"
          onClick={handleLeftArrow}
        >
          <AiOutlineLeft />
        </div>
      )}

      <div
        style={{ fontSize: 50 }}
        className="movieRow-right"
        onClick={handleRightArrow}
      >
        <AiOutlineRight />
      </div>
      <div className="movieRow-listarea">
        {/* VERIFICA SE A PROPS searchActive e true, se for renderiza as imagems do filme
      Enfilerados ao inves de carrosel*/}

        {/* items2 e requisição apenas de series é items e a requisição apenas de filmes*/}

        {searchActive ? (
          <div className="movieRow-list" style={{ marginTop: "80px" }}>
            {items2.results.length > 0 &&
              items2.results.map((item, key) => (
                <div
                  key={key}
                  className="movieRow-item"
                  style={{
                    padding: "22px 8px",
                    width: "220px",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/movie/${item.id}`}
                  >
                    <img
                      src={
                        item.poster_path === null
                          ? "http://tribogamer.com/images/notfound.jpg"
                          : `https://image.tmdb.org/t/p/w500${item.poster_path}`
                      }
                      style={{ height: "300px" }}
                      alt={item.original_title}
                    />
                    <div className="title">
                      <span>
                        {item.name.length > 20
                          ? `${item.name.substring(0, 20)}...`
                          : item.name}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            {items.results.length > 0 &&
              items.results.map((item, key) => (
                <div
                  key={key}
                  className="movieRow-item"
                  style={{
                    padding: "22px 8px",
                    width: "220px",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/movie/${item.id}`}
                  >
                    <img
                      src={
                        item.poster_path === null
                          ? "http://tribogamer.com/images/notfound.jpg"
                          : `https://image.tmdb.org/t/p/w500${item.poster_path}`
                      }
                      alt={item.original_title}
                      style={{ height: "300px" }}
                    />
                    <div className="title">
                      <span>{item.title.substring(0, 18)}</span>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        ) : (
          <div
            className="movieRow-list"
            style={{ marginLeft: scrollX, width: items.results.length * 223 }}
          >
            {items.results.length > 0 &&
              items.results.map((item, key) => (
                <div key={key} className="movieRow-item">
                  <Link to={`/movie/${item.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.original_title}
                    />
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
