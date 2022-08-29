import React, { Fragment, useState, useEffect } from "react";
import "../styles/profileEdit.css";
import UsersService from "../services/users";

const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);

  const logOut = async () => {
    await UsersService.logout();
    setRedirectToLogin(true);
  };

  const initializeUser = async () => {
    const user = await JSON.parse(localStorage.getItem("user"));
    setName(user["name"]);
    setEmail(user["email"]);
  };

  useEffect(() => {
    initializeUser();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UsersService.update({
        email: email,
        name: name,
      });
      setSucess(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Fragment>
      <form>
        <div className="container-profile-edit">
          {sucess ? (
            <h1>ATUALIZADO COM SUCESSO, RECARREGE A PÁGINA</h1>
          ) : error ? (
            <h1>ERROR, AO ATUALIZAR INFORMAÇÕES</h1>
          ) : (
            <h1>EDITE SUAS CONFIGURAÇÕES</h1>
          )}

          <label htmlFor="username">Username </label>
          <input
            type="text"
            name="username"
            placeholder="Insira o seu novo usuário"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Insira o seu novo e-mail"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="profile-edit-buttons">
            <button id="save" onClick={handleSubmit}>
              Salvar
            </button>
            <button id="logout" onClick={logOut}>
              Sair
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ProfileEdit;
