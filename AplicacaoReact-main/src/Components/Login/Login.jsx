import "../Login/Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/homes");
    };

    return (
        <div id="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit}>
                <p id="login-info-text">Digite os seus dados de acesso.</p>
                
                <label className="login-label" htmlFor="nome">
                    Nome:
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        minLength="20"
                        maxLength="27"
                        required
                    />
                </label>
                
                <label className="login-label" htmlFor="senha">
                    Senha:
                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        minLength="6"
                        maxLength="8"
                        required
                    />
                </label>
                
                <button type="submit" className="login-button">
                    Entrar
                </button>
                
                <button type="button" className="login-button" onClick={() => navigate("/")}>
                    Início
                </button>
            </form>
        </div>
    );
};

export default Login;
