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
          <textarea id="nome" minLength="20" maxLength="27"></textarea>
        </label>

        <label htmlFor="senha" className="label-text">
          Senha:  
          <textarea id="senha" minLength="6" maxLength="10"></textarea>
        </label>

        <label htmlFor="confirmacao" className="label-text">
          Confirme a senha:  
          <textarea id="confirmacao" minLength="6" maxLength="10"></textarea>
        </label>

        <input className="button salvar" type="submit" value="Salvar" />

        <button className="button" id="login-button">
          <Link to="/login">Login</Link>
        </button>
        
        <button className="button" id="home-button">
          <Link to="/">Início</Link>
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
