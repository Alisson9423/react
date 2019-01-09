import React from 'react';
import ReactDom from 'react-dom';
import {Primeiro, Segundo}  from './componente';

//Instancia de uma tag podendo passar as props para componente que você imformou
ReactDom.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>,
    document.getElementById('app'))