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
            <button className="contato">Entrar em contato</button>
          </div>
          <div className="info-right"></div>
        </div>
      </div>
    </>
  );
}

export default App
