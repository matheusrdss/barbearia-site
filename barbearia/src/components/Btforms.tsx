import React from 'react';
import './Btforms.css';

function Btforms(props: any){
    return (
        <>
            <button className='buttonf'>{props.text}</button>
        </>
    );
}

export default Btforms