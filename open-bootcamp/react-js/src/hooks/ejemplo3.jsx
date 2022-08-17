import React, { useRef, useEffect } from "react";

export default function Ejemplo3() {

    const myRef = useRef();

  useEffect(() => {
    console.log(myRef);
  });


  return (
    <div>
      <h2 ref={myRef} >useRef</h2>
    </div>
  );
}

