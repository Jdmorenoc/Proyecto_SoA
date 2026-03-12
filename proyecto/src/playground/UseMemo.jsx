import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function UseMemoExample() {

  const navigate = useNavigate();
  const [numero, setNumero] = useState(0);
  const [contador, setContador] = useState(0);


  const calcularCuadrado = (n) => {
    console.log("Calculando...");
    return n * n;
  };

  const resultado = useMemo(() => calcularCuadrado(numero), [numero]);

  return (
    <div>

      <button onClick={() => navigate("/")}>
        Volver a Home
      </button>

      <h2>Ejemplo del Hook useMemo</h2>

      <p>Número: {numero}</p>
      <p>Cuadrado: {resultado}</p>

      <button onClick={() => setNumero(numero + 1)}>
        Cambiar número
      </button>

      <hr />

      <p>Contador: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Aumentar contador
      </button>

    </div>
  );
}

export default UseMemoExample;