import "../Login/Login.css";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div id="login-container">
            <h2 className="login-title">Login</h2>
            <form>
                <p id="login-info-text">Digite os seus dados de acesso.</p>
                
                <label className="login-label" htmlFor="nome">
                    Nome:
                    <textarea id="nome" minLength="20" maxLength="27"></textarea>
                </label>
                
                <label className="login-label" htmlFor="senha">
                    Senha:
                    <textarea id="senha" minLength="6" maxLength="8"></textarea>
                </label>
                
                <button className="login-button">
                    <Link to="/homes">Entrar</Link>
                </button>
                
                <button className="login-button">
                    <Link to="/">Início</Link>
                </button>
            </form>
        </div>
    );
};

export default Login;
