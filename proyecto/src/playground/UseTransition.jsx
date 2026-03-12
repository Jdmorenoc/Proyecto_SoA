import { useNavigate } from "react-router-dom";
import { useState, useTransition } from "react";

function UseTransitionExample() {

  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    startTransition(() => {
      const newList = [];
      for (let i = 0; i < 5000; i++) {
        newList.push(value + " " + i);
      }
      setList(newList);
    });
  };

  return (
    <div>
      <button onClick={() => navigate("/")}>
        Volver a Home
      </button>

      <h2>Ejemplo del Hook useTransition</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Escribe algo..."
      />

      <h3>
        {isPending ? "⏳ Cargando..." : "✅ Listo"}
      </h3>

      <ul>
        {list.slice(0, 20).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default UseTransitionExample;