import React, { Fragment } from "react";

import { AiOutlineInstagram } from "react-icons/ai";

import "./Footer.css";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="container">
          <div className="socials">
            <a target="_blank" href="https://www.instagram.com/mayconzzl/">
              <AiOutlineInstagram />
            </a>
          </div>
          <div className="copyright">
            <p>© Todos os diretos reservados a HBOMAX e TheMovieDB. </p>
            <p>Feito por Maycon</p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
export default Footer;
