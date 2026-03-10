function HomeHooks() {

  return (
    <div>
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
            <td>State Hook</td>
            <td>
              <button>
                Ver ejemplo
              </button>
            </td>
          </tr>


        </tbody>
      </table>
    </div>
  );
}

export default HomeHooks;