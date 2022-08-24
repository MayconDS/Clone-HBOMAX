import React from "react";
import "./CategoriesRow.css";

// Row de categorias abaixo do feature
export default () => {
  return (
    <div className="row">
      <ul id="ul">
        <li>
          <button>Destacados</button>
        </li>
        <li>
          <button>A-Z</button>
        </li>
        <li>
          <button>Adicionados Recentemente</button>
        </li>
        <li>
          <button>Popular</button>
        </li>
        <li>
          <button>Ação</button>
        </li>
        <li>
          <button>Comédia</button>
        </li>
        <li>
          <button>Policial</button>
        </li>
        <li>
          <button>Documentários</button>
        </li>
        <li>
          <button>Drama</button>
        </li>
        <li>
          <button>Ficção Científica e Fantasia</button>
        </li>
        <li>
          <button>Terror e Suspense</button>
        </li>
        <li>
          <button>Internacional</button>
        </li>
        <li>
          <button>Crianças e Família</button>
        </li>
        <li>
          <button>Produções Latinoamericanas</button>
        </li>
      </ul>
    </div>
  );
};
