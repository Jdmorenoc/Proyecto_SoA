import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function UseRef() {

  const navigate = useNavigate();

  const inputRef = useRef(null);

  const enfocarInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>

      <button onClick={() => navigate("/")}>Volver a Home</button>

      <h2>Ejemplo del Hook useRef</h2>

      <p>
        useRef permite acceder directamente a elementos del DOM sin causar
        re-render del componente.
      </p>

      <input ref={inputRef} type="text" placeholder="Escribe algo..." />

      <br /><br />

      <button onClick={enfocarInput}>
        Poner cursor en el input
      </button>

    </div>
  );
}

export default UseRef;