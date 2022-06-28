import * as React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <div className="Navbar">
                <div className="logo-div">
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