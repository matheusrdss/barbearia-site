import * as React from 'react';
import './Navbar.css';
import barber from './barber-pole.png';

function Navbar() {
    return (
        <>
            <div className="Navbar">
                <div className="logo-div">
                    <img src={barber} alt="" className="ico" />
                    <h1 className="logo">Barbearia</h1>
                </div>
                <div className="links">
                    <a href="#" className="home">Home</a>
                    <a href="#" className="contato">Contato</a>
                    <a href="#" className="localizacao">Localização</a>
                </div>
            </div>
        </>
    );
}

export default Navbar