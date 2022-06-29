import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="infos">
          <div className="info-left">
            <h1 className="titulo">Você não pode confiar em qualquer um com seu cabelo.</h1>
            <p className="sobre">A eficiencia que você procura somente nós podemos proporcionar</p>
            <button className="contato-b">Entrar em contato</button>
          </div>
          <div className="info-right">
          <img src="https://cdn-icons.flaticon.com/png/512/856/premium/856572.png?token=exp=1656519741~hmac=b6d3c542f1bbe4e8906bf9c6373f1b1f" alt="" className="icon" />
          </div>
        </div>
        <div className="nosso-espaco">
          <h1 className="foto">Nosso espaço</h1>
        </div>
        <div className="local-fotos">
            <img src="https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos.jpg" alt="" className="img1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQCZ_FeCkVpopAbH4B77gfK-u0PuZFoRJiA&usqp=CAU" alt="" className="img2" />
            <img src="https://cdn.shopify.com/s/files/1/0408/8473/articles/header_10-barbearias_b99bc3d5-2ed1-435e-a2ee-bf091ba5c0ac.jpg?v=1568418224" alt="" className="img3" />
        </div>
      </div>
    </>
  );
}

export default App
