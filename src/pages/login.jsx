import React, { Fragment, useState } from "react";
import { Navigate, Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import UsersService from "../services/users";

import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await UsersService.login({
        email: email,
        password: password,
      });
      setRedirectToHome(true);
    } catch (error) {
      setError(true);
    }
  };

  if (redirectToHome) return <Navigate to="/" />;

  return (
    <div className="page-login">
      <Navbar title={"Entrar"} buttonLog={"Entrar"} />
      <form onSubmit={HandleSubmit}>
        <div className="container-form-login">
          {error ? (
            <p className="danger">Email or Password invalid</p>
          ) : (
            <p>Você tem uma conta da HBO Max?</p>
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Endereço de e-mail"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
          />
          <div className="login-buttons">
            <button>ENTRAR</button>
            <a href="/register">Esqueceu a senha?</a>
          </div>
          <span>OU</span>

          <p id="login-text-bottom">
            Você acessa a HBO Max por outra empresa, como um provedor de TV, de
            celular ou de internet?
          </p>
          <div className="login-button-enter-provider">
            <Link to="/register">
              <button>REGISTRAR</button>
            </Link>
          </div>
        </div>
      </form>

      <div className="login-text-help">
        {" "}
        <a href="/">Precisa de ajuda para entrar?</a>
      </div>
    </div>
  );
};
export default Login;
