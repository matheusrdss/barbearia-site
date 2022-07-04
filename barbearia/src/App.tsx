import * as React from 'react';
import './App.css';
import Button from './components/Button';
import Btforms from './components/Button';
import Navbar from './components/Navbar';
import Servico from './components/Servico';
import Navalha from './navalha.png';
import Cabelo from './m.png';
import Cerveja from './cerveja.png';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="infos">
          <div className="info-left">
            <h1 className="titulo">Você não pode confiar em qualquer um com seu cabelo.</h1>
            <p className="sobre">A eficiencia que você procura somente nós podemos proporcionar</p>
            <div className="bt-inicio">
              <Button text="Entrar em contato"/>
            </div>
          </div>
          <div className="info-right">
            <img src="https://cdn-icons.flaticon.com/png/512/856/premium/856572.png?token=exp=1656587047~hmac=347f887e5a19302515516f0b999a5137" alt="" className="icon" />
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
          <img src="https://blog.beard.com.br/wp-content/uploads/2017/05/barbearia-ruiz-03.jpeg" alt="" className="local-img" />
        </div>
        <div className="servicos">
          <Servico text="Barba" imgs={Navalha}/>
          <Servico text="Cabelo" imgs={Cabelo}/>
          <Servico text="Boteco" imgs={Cerveja}/>
        </div>
        <div className="div-contato">
          <div className="info-contato">
            <h1 className="title-contato">Contato</h1>
            {/* <div className="line"></div> */}
            <p className="contato-p">Gostou da Barbearia? Tem alguma sugestão para melhorar o lugar? Conta pra gente!</p>
          </div>
          <div className="segunda-parte">
            <div className="loc-contato">
              <h1 className="loc">Rua Silva Jardim, 1834 - Boa Vista - São José do Rio Preto/SP</h1>
              <h1 className="loc">contato@contato.com</h1>
              <h1 className="loc">Telefone - +55 17 3234.4805</h1>
            </div>
            {/* <div className="forms">
               <input placeholder='Nome' type="text" className="forms-name input" />
               <input placeholder='Email' type="email" className="forms-name input" />
               <input placeholder='Número' type="number" className="forms-name input" />
               <input placeholder='Mensagem' type="text" className="forms-name input" />
               <Btforms className="aa" text="Enviar"/>
            </div> */}
          </div>
        </div>
        <div className="space">
          <h1><a href=""></a></h1>
        </div>
        <div className="div-criador">
          <h1 className="criador">Criado por Matheus 2022</h1>
        </div>
      </div>
    </>
  );
}

export default App
