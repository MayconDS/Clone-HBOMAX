import React from "react";

import "./FeaturedMovie.css";

export default ({ item, icon, overview, textButton, buttonHomeActive }) => {
  // (item) ta vindo de uma requisição atraves de props
  // (icon) e o icone que fica destacado abaixo do texto, está sendo passado por props, ele muda referente a pagina acessada
  // (textButton) e o texto do button que fica destacado abaixo do texto, está sendo passado por props, ele muda referente a pagina acessada
  // (buttonHomeActive) é passado atraves de props, se ele é true ele renderiza outro desing de button
  // (overview) e a descrição abaixo do título do filme no feature, ele e passando quando a página home não é acionada

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-bottom">
            <div className="featured-info">
              <div className="featured-name">{item.original_name}</div>
              <div className="featured-p1">
                <p style={{ fontWeight: "bold" }}>
                  {overview
                    ? "NOVOS EPISÓDIOS"
                    : "As histórias que você ama e outras para descobrir"}
                </p>
              </div>
              <div style={{ width: "40%" }} className="featured-p2">
                {overview
                  ? item.overview.substring(0, 140)
                  : `Filmes e séries, UEFA Champions League ao vivo ou conteúdo infantil.`}
              </div>
              {buttonHomeActive ? (
                <div className="featured-button-assista-movie">
                  <button>
                    <p id="user">{icon}</p>
                    <p id="assist">{textButton}</p>
                  </button>
                </div>
              ) : (
                <div className="featured-button-assista-series">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAaklEQVR42s2TQRGAMAwEKwEJSMIBFnCEhEqIlEqohOUHA5PQ3K/7v9tmkpYyNzROViUA0Ni1AJD28JDz8Gbs4cvIg8efB5/YQ0xVA6YEOofyJFOGjrvdgCmL62zKaVSW/PHluu8PlO2eiQuhWiaUkBmEYwAAAABJRU5ErkJggg=="
                    alt=""
                    srcset=""
                    id="play"
                  />

                  <button id="assist">{textButton}</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
