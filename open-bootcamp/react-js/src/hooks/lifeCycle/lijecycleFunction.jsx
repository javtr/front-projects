import React, { useEffect } from "react";

const LifeCycleFunction = () => {
  useEffect(() => {
    console.log("Componente creado");

    const intervalID = setInterval(() => {
      document.title = `${new Date()}`;
      console.log("Actualización del componente");
    }, 1000);

    return () => {
      console.log("Componente va a desaparecer");
      document.title = "Tiempo detenido";
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div>
      <h2>Ejemplo de ciclo de vida Funcion</h2>
    </div>
  );
};

export default LifeCycleFunction;
