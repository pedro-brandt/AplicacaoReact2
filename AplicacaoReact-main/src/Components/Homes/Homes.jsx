import "../Homes/Homes.css"
import { Link } from "react-router-dom";
import React from "react";

export default function Homes() {
  return (

  <div className="App-container">
    <div className="menu-container">
      <div className="menu">
        <div className="txt">
          <h1>Estoque P G!</h1>
        </div>

        <br></br>

        <div className="bts">
          <Link to="/cadastro">
              <button id="bt4">Cadastro</button>
          </Link>
          <Link to="/login">
              <button id="bt4">Login</button>
          </Link>

          {/*<button id="bt16">
            produtos
            <form>
              <label>Carros</label>
              <label>Carros</label>
              <label>Carros</label>
            </form>
            </button>

            const [buttonVisibility setButtonVisibility] = useState(false);
            //////////////////////////////
          <button id="bProdutos">Produtos
            <li><a>produtos alimenticios</a></li>
            <li><a>automoveis</a></li>
            <li><a>itens de beleze</a></li>
            <li><a>joias</a></li>
            <li><a>vestimentas</a></li>
          </button>*/}

          <select className="prod">
            <option value="produtos">Produtos</option>
            <option value="automoveis">Automoveis</option>
            <option value="beleza">Itens de beleza</option>
            <option value="joias">Joias</option>
            <option value="roupas">Itens de vestimenta</option>
            <option value="games">Games</option>
          </select>
        </div>
      </div>
    </div>
  
    <div className="App-pai">
      <div className="App-filho">
        <h3 id="txt2"> Quem nos somos:</h3>
        <br></br>
        <p id="txt2"><img id="img1" src="https://roldao.com.br/wp-content/uploads/2020/03/Gest%C3%A3o-de-estoque-Blog-do-Rold%C3%A3o.jpg" width={600} height={400}></img>Somos uma empresa focada no ramo de gerenciamento de estoque.  <br></br> Fundada em 2024, facilitamos a vida dos nossos clientes com
        a nossa simplicidade e objetividade.<br></br> Gerenciamos uma gama de produtos, de alimentos até itens de luxo. <br></br>Estamos sempre focando em nossa eficiencia,
        satisfação dos nossos clientes e preços acessíveis para os fornecedores.
        <br></br>
        <br></br>
        Nós nos orgulhamos de sermos uma das 10 melhores empresas de gerenciamento de produtos da américa latina com mais de 100.00 clientes.<br></br>
        <br></br>
        </p>
      </div>
      <h2>Veja a seguir algum de nossos produtos:</h2>
      <br />
      <div className="App2">
        <br></br>
        <br></br>
        <div  className="Alimentos">
          <img
            src="https://jasminealimentos.com/wp-content/uploads/2017/07/como-escolher-os-melhores-alimentos-1.jpg" width={400} height={200}alt="Alimentos"
          />
          <p>Alimentos</p>
        </div>
        <div className="Carros">
          <img
            src="https://bahiaeconomica.com.br/wp/wp-content/uploads/2024/09/patio-da-vports-recebe-carros-importados-2075839.webp" width={400} height={200}alt="Carros"
          />
          <p>Carros</p>
        </div>
        <div className="Joias">
          <img
            src="https://blog.damasemijoias.com.br/wp-content/uploads/2017/08/como-organizar-um-estoque-de-semijoias-aprenda-810x485.jpeg" width={400} height={200}alt="Joias"
          />
          <p>Joias</p>
        </div>
      </div>
      <br></br>
      <div className="precos">
        <h2>Nossos preços em media(Valor Unitario):</h2>
        <br></br>
        <br></br>
        <p>Estoque Pequeno: R$ 130 a R$ 150</p>
        <p>Estoque Médio: R$ 170 a 200</p>
        <p>Estoque Alto:	R$ 220 a R$ 255</p>
      </div>
      <div className="contato">
        <h2>Entre em contato conosco em:</h2>
        <br></br>
        <br></br>
        <p>Whatsap:8873****</p>
        <p>Email: PGEstoque@gmail.com</p>
      </div>
    </div>
  </div>
  );
}


