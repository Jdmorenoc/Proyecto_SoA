import React, { useId } from "react";
import { useNavigate } from "react-router-dom";

function UseId() {

  const navigate = useNavigate();

  const idNombre = useId();
  const idCorreo = useId();

  return (
    <div>

      <button onClick={() => navigate("/")}>Volver a Home</button>

      <h2>Ejemplo del Hook useId</h2>

      <p>
        useId genera identificadores únicos que se pueden usar para conectar
        labels con inputs.
      </p>

      <div>
        <label htmlFor={idNombre}>Nombre:</label>
        <input id={idNombre} type="text" />
      </div>

      <br />

      <div>
        <label htmlFor={idCorreo}>Correo:</label>
        <input id={idCorreo} type="email" />
      </div>

    </div>
  );
}

export default UseId;