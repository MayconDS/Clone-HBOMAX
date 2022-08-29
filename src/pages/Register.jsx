import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/register.css";
import UsersService from "../services/users";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await UsersService.register({
        name: name,
        email: email,
        password: password,
      });
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
    }
  };

  if (redirectToLogin) return <Navigate to="/login" />;

  return (
    <div className="page-register">
      <Navbar title={"Entrar"} buttonLog={"Entrar"} />
      <form onSubmit={HandleSubmit}>
        <div className="container-form-register">
          {error ? (
            <p className="danger">Usuario ja cadastrado!!</p>
          ) : (
            <p>Você tem uma conta da HBO Max?</p>
          )}

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome de usuario"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Endereço de e-mail"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
          />
          <div className="register-buttons">
            <button>REGISTRAR</button>
            <a href="/login">Fazer Login</a>
          </div>

          <span>OU</span>

          <p id="register-text-bottom">
            Você acessa a HBO Max por outra empresa, como um provedor de TV, de
            celular ou de internet?
          </p>
          <div className="register-button-enter-provider">
            <button>ENTRAR COM PROVEDOR</button>
          </div>
        </div>
      </form>
      <div className="register-text-help">
        {" "}
        <a href="/">Precisa de ajuda para entrar?</a>
      </div>
    </div>
  );
};
export default Register;
