import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import MovieRow from "../components/MovieRow";
import ApiMovies from "../services/ApiMovies";
import Footer from "../components/Footer";

import "../styles/search.css";

const Search = () => {
  // Parametro de search da url
  const [searchParams] = useSearchParams();

  // Armazena o array de filmes/series do search
  const [searchMovieList, setSearchMovieList] = useState([]);

  const query = searchParams.get("q");

  useEffect(() => {
    const load = async () => {
      if (query != null) {
        let list = await ApiMovies.getSearchMovie(query);
        setSearchMovieList(list);
      } else {
        return;
      }
    };
    load();
  }, [query]);
  return (
    <div className={query == null ? "page-search" : ""}>
      <Navbar buttonLog={"Sair"} searchInput={true} />
      <br />
      <br />
      <br />
      <br />
      {query === null
        ? false
        : searchMovieList.map((item, key) => (
            <MovieRow
              items={item.items}
              items2={item.items2}
              key={key}
              searchActive={true}
            />
          ))}

      <Footer />
    </div>
  );
};

export default Search;
