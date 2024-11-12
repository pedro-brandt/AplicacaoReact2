import React from "react";
import { Link } from "react-router-dom";
import "../Home/Home.css";

export default function Home() {
  return (
    <div id="home-container">
      <header className="menu-container">
        <div className="menu">
          <div className="txt">
            <h1>Estoque P G!</h1>
          </div>
          <div className="bts">
            <button className="button">
              <Link to="/cadastro">Cadastro</Link>
            </button>
            <button className="button">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="about">
          <h3 className="title">Quem nós somos:</h3>
          <p className="description">
            <img
              className="about-img" src="https://roldao.com.br/wp-content/uploads/2020/03/Gest%C3%A3o-de-estoque-Blog-do-Rold%C3%A3o.jpg"
              alt="Gestão de Estoque" width={600} height={400}
            />
            Somos uma empresa focada no ramo de gerenciamento de estoque...
          </p>
        </section>

        <section className="products">
          <h2>Veja a seguir algum de nossos produtos:</h2>
          <div className="product-list">
            <div className="product">
              <img
                src="https://jasminealimentos.com/wp-content/uploads/2017/07/como-escolher-os-melhores-alimentos-1.jpg" alt="Alimentos" width={400} height={200}
              />
              <p>Alimentos</p>
            </div>
            <div className="product">
              <img
                src="https://bahiaeconomica.com.br/wp/wp-content/uploads/2024/09/patio-da-vports-recebe-carros-importados-2075839.webp" alt="Carros" width={400} height={200}
              />
              <p>Carros</p>
            </div>
            <div className="product">
              <img
                src="https://blog.damasemijoias.com.br/wp-content/uploads/2017/08/como-organizar-um-estoque-de-semijoias-aprenda-810x485.jpeg" alt="Joias" width={400} height={200}
              />
              <p>Joias</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2>Entre em contato conosco em:</h2>
          <p>WhatsApp: 8873****</p>
          <p>Email: PGEstoque@gmail.com</p>
        </section>
      </main>
    </div>
  );
}
