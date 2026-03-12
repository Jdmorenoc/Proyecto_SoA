import { useNavigate } from "react-router-dom";
import { useInsertionEffect } from "react";

function UseInsertionEffectExample() {

  const navigate = useNavigate();

  useInsertionEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      .custom-text {
        color: blue;
        font-weight: bold;
        font-size: 20px;
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };

  }, []);

  return (
    <div>

      <button onClick={() => navigate("/")}>
        Volver a Home
      </button>

      <h2>Ejemplo del Hook useInsertionEffect</h2>

      <p className="custom-text">
        Este texto tiene estilos insertados con useInsertionEffect
      </p>

    </div>
  );
}

export default UseInsertionEffectExample;