import React from "react";
import { useState } from "react";

export default function Ejemplo1() {

  const estadoInicial1 = 0;
  const estadoInicial2 = {
    nombre: "nombreIni",
    apellido: "apellidoIni",
  };

  const [contador1, setContador1] = useState(estadoInicial1);
  const [persona1, setPersona1] = useState(estadoInicial2);

  function aumentarContador() {
    setContador1(contador1 + 1);
  }

  function cambiarPersona1() {
    setPersona1({
      nombre: "pepe",
      apellido: "grillo",
    });
  }

  return(
  <div>
    <h2>Ejemplo de useState</h2>
    <h3>Contador1: {contador1}</h3>
    <h3>Persona1 nombre: {persona1.nombre}</h3>
    <h3>Persona1 apellido: {persona1.apellido}</h3>
    <button onClick={aumentarContador}></button>
    <button onClick={cambiarPersona1}></button>
  </div>);
}
