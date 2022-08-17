import React, { useState, useEffect } from "react";

export default function ejemplo2() {
  const [cont1, modificaCont1] = useState(0);
  const [cont2, modificaCont2] = useState(0);

  function aumentarCont1() {
    modificaCont1(cont1 + 1);
  }

  function aumentarCont2() {
    modificaCont2(cont2 + 1);
  }

  useEffect(() => {
    console.log("ejecutar codigo");
  },[cont1]);

  return (
    <div>
      <h2>useEffect</h2>
      <h3>Contador1: {cont1}</h3>
      <h3>Contador2: {cont2}</h3>
      <button onClick={aumentarCont1}>Aumentar contador 1</button>
      <button onClick={aumentarCont2}>Aumentar contador 2</button>
    </div>
  );
}
