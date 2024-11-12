import "../Cadastro/Cadastro.css";
import React from "react";
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
    <div id="cadastro-container">
      <h2 className="cadastro-title">Cadastro</h2>

      <form>
        <p className="info-text">Insira seus dados para cadastro.</p>

        <label htmlFor="nome" className="label-text">
          Nome:
          <input
            id="nome"
            type="text"
            minLength="20"
            maxLength="27"
            required
          />
        </label>

        <label htmlFor="senha" className="label-text">
          Senha:
          <input
            id="senha"
            type="password"
            minLength="6"
            maxLength="10"
            required
          />
        </label>

        <label htmlFor="confirmacao" className="label-text">
          Confirme a senha:
          <input
            id="confirmacao"
            type="password"
            minLength="6"
            maxLength="10"
            required
          />
        </label>

        <input className="button salvar" type="submit" value="Salvar" />

        <Link to="/login" className="button" id="login-button">Login</Link>
        
        <Link to="/" className="button" id="home-button">Início</Link>
      </form>
    </div>
  );
};

export default Cadastro;