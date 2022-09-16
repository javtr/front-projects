import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//! los estilos personalizados van delante de bootstrap
//! de lo contrario bootstrap los pisa

import App from "./App";
import AppRouting from "./AppRouting";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <AppRouting />
  </BrowserRouter>
  , document.getElementById('root')
);
