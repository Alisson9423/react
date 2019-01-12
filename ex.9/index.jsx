import React from 'react';
import ReactDom from 'react-dom';
import Component from './Component'


ReactDom.render(<Component label="Contador" initialValue={10} />
    ,document.getElementById('app'))