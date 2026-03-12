import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import InputControl from "./InputControl";

function UseImperativeHandle() {

  const navigate = useNavigate();
  const inputRef = useRef();

  return (
    <div>

      <button onClick={() => navigate("/")}>Volver a Home</button>

      <h2>Ejemplo del Hook useImperativeHandle</h2>

      <p>
        useImperativeHandle permite que un componente hijo exponga funciones
        que pueden ser controladas desde el componente padre.
      </p>

      <InputControl ref={inputRef} />

      <br /><br />

      <button onClick={() => inputRef.current.enfocar()}>
        Enfocar input
      </button>

      <button onClick={() => inputRef.current.limpiar()}>
        Limpiar input
      </button>

    </div>
  );
}

export default UseImperativeHandle;