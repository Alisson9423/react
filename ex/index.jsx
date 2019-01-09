import React from 'react';
import ReactDom from 'react-dom';
import Family from './family';
import Member from './member';


//Instancia de uma tag podendo passar as props para componente que você imformou
ReactDom.render(
    <Family lastName="Ferreira" >
        <Member name='Alisson' />
        <Member name='Aline' />
        <Member name='Cristiane' />
    </Family>
    ,
    document.getElementById('app'))