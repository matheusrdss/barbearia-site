import React from 'react';
import './Servico.css';

function Servico(props: any) {
    return (
      <>
        <div className="servico-div">
          <img className='img' src={props.imgs} alt="" />
          <h1 className='text'>{props.text}</h1>
        </div>
      </>
    );
  }

export default Servico