import React, { use } from "react";
import { useNavigate } from "react-router-dom";

function obtenerMensaje() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos cargados correctamente usando el hook use()");
    }, 2000);
  });
}

const mensajePromise = obtenerMensaje();

function Use() {

  const navigate = useNavigate();

  const mensaje = use(mensajePromise);

  return (
    <div>

      <button onClick={() => navigate("/")}>Volver a Home</button>

      <h2>Ejemplo del Hook use()</h2>

      <p>
        El hook use() permite leer promesas directamente en un componente
        y esperar su resultado.
      </p>

      <h3>{mensaje}</h3>

    </div>
  );
}

export default Use;