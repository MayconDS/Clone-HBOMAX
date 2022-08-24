import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import UsersService from "../services/users";

import { slide as Menu } from "react-burger-menu";
import { HiOutlineMenu } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

import "./Navbar.css";

export default ({ title, buttonLog, searchInput }) => {
  // (title) é o texto que fica abaixo da logo HBOMAX, ele muda referente a page acessada
  // (buttonLog) é o button ao lado do nome do usúario, ele some referente a page acessada

  // seta background na Navbar quando o scrollY > 10
  const [blackHeader, setBlackHeader] = useState(false);

  // Armazena o valor do input de search é e passado atraves da query para a page /search
  const [search, setSearch] = useState("");

  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logOut = async () => {
    await UsersService.logout();
    setRedirectToLogin(true);
  };

  if (redirectToLogin == true) {
    navigate("/login");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <header className={blackHeader ? "black" : ""}>
      <div className="container">
        <div className="header-left">
          <div className="header-burger">
            {/* Start Menu de burger */}
            <Menu noOverlay customBurgerIcon={<HiOutlineMenu />} left>
              <div className="menu-item">
                <Link to="/">Inicio</Link>
              </div>
              <div className="menu-item">
                <Link to="/filmes">Filmes</Link>
              </div>
              <div className="menu-item">
                <Link to="/series">Séries</Link>
              </div>
              <div className="menu-item">
                <Link to="/">Originais</Link>
              </div>
              <div className="menu-item">
                <Link to="/">
                  Adicionados
                  <br />
                  Recentemente
                </Link>
              </div>
              <div className="menu-item">
                <Link to="/">Últimos Dias</Link>
              </div>
              <div className="menu-item">
                <Link to="/">Em Breve</Link>
              </div>
              <div className="menu-item">
                <Link to="/">Em Alta</Link>
              </div>
              <div className="menu-item">
                <Link to="/">Aproveite grátis</Link>
              </div>
            </Menu>
            {/* End Menu de burger */}
          </div>
          <div className="header-filmes">
            <Link className="menu-item" to="/filmes">
              Filmes
            </Link>
          </div>
          <div className="header-series">
            <Link className="menu-item" to="/series">
              Séries
            </Link>
          </div>
        </div>
        <div className="header-center">
          <div className="header-logo">
            <Link to="/">
              <img
                src="https://www.hbobrasil.com/Content/img/logo-HBO_Max-White.png"
                alt=""
                srcset=""
              />
            </Link>
            <span id="label">{title}</span>
          </div>
        </div>
        <div className="header-right">
          <div className="header-search">
            <Link to="/search">
              <button id="button-search">
                <BiSearch />
              </button>
            </Link>
          </div>

          <div className="header-entrar">
            <button onClick={logOut}>{buttonLog}</button>
          </div>
          {user ? (
            <div className="header-button">
              <Link to="/users">
                <FaUserCircle />
                <span>{JSON.parse(user)["name"].substring(0, 7)}</span>
              </Link>
            </div>
          ) : (
            <FaUserCircle />
          )}
        </div>
      </div>
      {searchInput ? (
        <div className="input-search">
          <form onSubmit={handleSubmit}>
            <span id="lupa-search">
              <BiSearch />
            </span>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="search"
              name=""
              id=""
              placeholder="Oque você está procurando?"
            />
          </form>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};
