import React from 'react';
import ReactDom from 'react-dom';
import Component  from './componente';

//Instancia de uma tag podendo passar as props para componente que você imformou
ReactDom.render(<Component value="Show" />,document.getElementById('app'))