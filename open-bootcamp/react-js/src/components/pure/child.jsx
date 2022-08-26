import React, { useRef } from "react";

const ChildComponente = ({ send, envio, name }) => {
  const refImput = useRef("");
  const refName = useRef("");

  function funcionHijo(texto) {
    alert(`texto enviado desde boton: ${refImput.current.value}`);
  }

  function funcionInput(value) {
    console.log(`valor desde input: ${value}`);
  }

  function submitHandler(e) {
    e.preventDefault();
    envio(refName.current.value);
  }

  return (
    <div>
      <h2>Hola</h2>
      <button onClick={() => funcionHijo("hola")}>llamar funcion</button>
      <input
        placeholder="insertar texto"
        onChange={(e) => funcionInput(e.target.value)}
        ref={refImput}
      ></input>
      <button onClick={() => send(refImput.current.value)}>
        llamar funcion en padre
      </button>

      <h2>Formulario de {name}</h2>

      <div style={{ marginTop: "30px" }}>
        <form onSubmit={submitHandler}>
          <input placeholder="name" ref={refName}></input>
          <button type="submit">enviar</button>
        </form>
      </div>

    </div>
  );
};

export default ChildComponente;

// function submitHandler(e) {
//   e.preventDefault();
//   envio(refName.current.value);
// }

{
  /* <div style={{marginTop : '30px'}}>

<form onSubmit={submitHandler}>

  <input
  placeholder="name"
  ref={refName}
  ></input>

  <button type="submit">enviar</button>

</form>

</div> */
}
