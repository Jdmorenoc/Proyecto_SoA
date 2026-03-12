import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UseEffectExample() {

  const navigate = useNavigate();
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  return (
    <div>

      <button onClick={() => navigate("/")}>
        Volver a Home
      </button>

      <h2>Ejemplo del Hook useEffect</h2>

      <h3>Contador: {contador}</h3>

      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>

    </div>
  );
}

export default UseEffectExample;