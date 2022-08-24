import React, { useState, useEffect } from "react";

import ApiMovies from "../services/ApiMovies";
import MovieRow from "../components/MovieRow";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

import { AiOutlineUser } from "react-icons/ai";

import "../styles/Home.css";

export default () => {
  // Seta toda a lista de filmes //
  const [movieList, setMovieList] = useState([]);
  // Seta o banner no inicio da pagina
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    // Pegando a lista de filmes //

    const loadAll = async () => {
      let list = await ApiMovies.getHomeList();
      setMovieList(list);

      // Pegando featured (banner da página) //

      let originals = list.filter((i) => i.slug === "exclusive");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await ApiMovies.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <Navbar buttonLog={"Sair"} />

      {featuredData && (
        <Featured
          icon={<AiOutlineUser />}
          textButton="ASSISTA AGORA"
          buttonHomeActive={true}
          item={featuredData}
        />
      )}

      {movieList.map((item, key) => (
        <MovieRow
          items={item.items}
          title2={item.title2}
          title={item.title}
          key={key}
          searchActive={false}
        />
      ))}
      <Footer />
    </div>
  );
};
