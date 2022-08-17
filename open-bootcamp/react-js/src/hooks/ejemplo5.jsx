import React from 'react';

const Ejemplo5 = (props) => {
    return (
        <div>
            <h2>Componente Hijo</h2>
            { props.children }
            <h2>se renderizo lo que se envio desde el padre</h2>
        </div>
    );
}

export default Ejemplo5;
