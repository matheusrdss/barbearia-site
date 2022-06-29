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
        <div className="seta-div">
          <img src="https://cdn-icons-png.flaticon.com/512/56/56747.png" alt="" className="seta" />
        </div>
        <div className="sobre-nos">
          <div className="info-sobre-nos">
            <h1 className='sobre-title' >SOBRE NOS</h1>
            <p className="sobre-nos-p">Toalha quente, navalha, cavalheirismo. Na Barbearia o homem pode cortar o cabelo em ambiente personalizado, só para o público masculino, com atendimento diferenciado, toalha quente, navalha, café, recepcionista, manobrista, marcação de horário por aplicativo. Uma barbearia realmente conceito. Todos os colaboradores são treinados por ele, para que haja uma padronização e para que todos falem a mesma “linguagem”.</p>
          </div>
          <img src="https://blog.beard.com.br/wp-content/uploads/2017/05/barbearia-ruiz-03.jpeg" alt="" className="local" />
        </div>
        <div className="space">
          <h1><a href=""></a></h1>
        </div>
      </div>
    </>
  );
}

export default App
