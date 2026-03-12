import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function UseCallback() {

  const navigate = useNavigate();

  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => {
    setContador(prev => prev + 1);
  }, []);

  return (
    <div>

      <button onClick={() => navigate("/")}>Volver a Home</button>

      <h2>Ejemplo del Hook useCallback</h2>

      <p>
        useCallback memoriza una función para evitar que se vuelva a crear
        en cada render del componente.
      </p>

      <h3>Contador: {contador}</h3>

      <button onClick={incrementar}>
        Incrementar contador
      </button>

    </div>
  );
}

export default UseCallback;