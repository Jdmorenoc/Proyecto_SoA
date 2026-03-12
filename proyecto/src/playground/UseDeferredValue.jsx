import { useState, useDeferredValue } from "react";
import { useNavigate } from "react-router-dom";

function UseDeferredValueExample() {

  const navigate = useNavigate();
  const [texto, setTexto] = useState("");

  const textoDiferido = useDeferredValue(texto);

  const lista = [
    "React",
    "JavaScript",
    "Laravel",
    "Spring Boot",
    "NodeJS",
    "Tailwind",
    "Astro",
    "PostgreSQL"
  ];

  const resultados = lista.filter((item) =>
    item.toLowerCase().includes(textoDiferido.toLowerCase())
  );

  return (
    <div>

      <button onClick={() => navigate("/")}>
        Volver a Home
      </button>

      <h2>Ejemplo del Hook useDeferredValue</h2>

      <input
        type="text"
        placeholder="Buscar tecnología..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <h3>Resultados:</h3>

      <ul>
        {resultados.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default UseDeferredValueExample;