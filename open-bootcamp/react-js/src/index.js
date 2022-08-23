import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'

//! los estilos personalizados van delante de bootstrap 
//! de lo contrario bootstrap los pisa

import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



