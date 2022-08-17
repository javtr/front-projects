import { func } from "prop-types";
import React, { useState, useContext } from "react";

const miContexto = React.createContext(null);

const Hijo1 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>el token es: {state.token}</h2>
      <Hijo2></Hijo2>
    </div>
  );
};

const Hijo2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>el id es: {state.id}</h2>
    </div>
  );
};

export default function Ejemplo4() {

    const datosSesionInicial = {
        token: '12345',
        id: '1'
    }

    const [datosSesion, setDatosSesion] = useState(datosSesionInicial);

    function modDatosSesion() {
        setDatosSesion(
            {
                token: '0000001',
                id: '001'
            }
        )
    }


  return (
    <div>
    <h2>Actualizar desde el padre</h2>
        <miContexto.Provider value={datosSesion}>
            <Hijo1></Hijo1>
            <button onClick={modDatosSesion}>Actualizar datos desde padre</button>
        </miContexto.Provider>
    </div>
    );
}
