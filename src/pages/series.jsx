import React, { Fragment, useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import ApiMovies from "../services/ApiMovies";
import MovieRow from "../components/MovieRow";
import CategoriesRow from "../components/CategoriesRow";
import Footer from "../components/Footer";

import { BiPlay } from "react-icons/bi";

const Series = () => {
  // Seta toda a lista de filmes //
  const [tvList, setTvList] = useState([]);
  // Seta o banner no inicio da pagina
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    // Pegando a lista de filmes //

    const loadList = async () => {
      let lista = await ApiMovies.getPageSeries();
      setTvList(lista);

      // Pegando featured //

      let chosenInfo = await ApiMovies.getMovieInfo(94997, "tv");
      setFeaturedData(chosenInfo);
    };
    loadList();
  }, []);

  return (
    <Fragment>
      <Navbar title="Séries" buttonLog={"Sair"} />
      {featuredData && (
        <Featured
          icon={<BiPlay />}
          overview={true}
          item={featuredData}
          textButton="SAIBA MAIS"
        />
      )}
      <CategoriesRow />
      {tvList.map((item, key) => (
        <MovieRow
          items={item.items}
          items2={item.items2}
          title={item.title}
          title2={item.title2}
          key={key}
        />
      ))}
      <Footer />
    </Fragment>
  );
};

export default Series;
