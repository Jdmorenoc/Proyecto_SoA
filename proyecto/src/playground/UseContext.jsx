import { useNavigate } from "react-router-dom";
import { createContext, useContext, useState } from "react";

// Crear el contexto
const ThemeContext = createContext();

function UseContextExample() {
  const navigate = useNavigate();

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeContent navigate={navigate} />
    </ThemeContext.Provider>
  );
}

// Componente que usa el contexto
function ThemeContent({ navigate }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => navigate("/")}>Volver a Home</button>

      <h2>Ejemplo del Hook useContext</h2>

      <h3>Tema actual: {theme === "light" ? "🌞 Claro" : "🌙 Oscuro"}</h3>

      <button onClick={toggleTheme}>
        Cambiar Tema
      </button>
    </div>
  );
}

export default UseContextExample;