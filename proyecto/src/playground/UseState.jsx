import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UseStateExample() {

  const navigate = useNavigate();

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const disminuir = () => {
    setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div>

      <button onClick={() => navigate("/")}>Volver a Home</button>

      <h2>Ejemplo del Hook useState</h2>

      <h3>Contador: {contador}</h3>

      <button onClick={incrementar}>➕ Aumentar</button>
      <button onClick={disminuir}>➖ Disminuir</button>
      <button onClick={reiniciar}>🔄 Reiniciar</button>

    </div>
  );
}

export default UseStateExample;