import { useNavigate } from "react-router-dom";

function HomeHooks() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Home Hooks</h1>
      <p>Listado de ejemplos de Hooks en React.</p>

      <h3>Integrantes</h3>
      <ul>
        <li>Juan Diego Moreno</li>
        <li>Andrés Felipe Rojas</li>
        <li>Ángel Urrego</li>
      </ul>

      <table border="1">
        <thead>
          <tr>
            <th>Hook</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Ejercicio</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>useState</td>
            <td>Permite manejar estado en componentes funcionales.</td>
            <td>Estado</td>
            <td>
              <button onClick={() => navigate("/useState")}>
                Ver Ejemplo
              </button>
            </td>
          </tr>
          <tr>
            <td>UseDebugValue</td>
            <td>Permite mostrar información de depuración de un hook personalizado en React DevTools para facilitar el desarrollo.</td>
            <td>Debug</td>
            <td>
              <button onClick={() => navigate("/useDebugValue")}>
                Ver Ejemplo
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HomeHooks;