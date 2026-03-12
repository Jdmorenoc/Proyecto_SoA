import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, lastAction: "Incrementar" };
    case "decrement":
      return { count: state.count - 1, lastAction: "Disminuir" };
    case "reset":
      return { count: 0, lastAction: "Reiniciar" };
    default:
      throw new Error("Acción desconocida");
  }
}

function UseReducer() {

  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    lastAction: "Ninguna"
  });

  return (
    <div>

      <button onClick={() => navigate("/")}>Volver a Home</button>

      <h2>Ejemplo del Hook useReducer</h2>

      <h3>Contador: {state.count}</h3>
      <p>Última acción ejecutada: {state.lastAction}</p>

      <button onClick={() => dispatch({ type: "increment" })}>
        ➕ Aumentar
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        ➖ Disminuir
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        🔄 Reiniciar
      </button>
    </div>
  );
}

export default UseReducer;