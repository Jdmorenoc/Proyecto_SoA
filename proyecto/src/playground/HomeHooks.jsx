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
            <td>useDebugValue</td>
            <td>Permite mostrar información de depuración de un hook personalizado en React DevTools para facilitar el desarrollo.</td>
            <td>Debug</td>
            <td>
              <button onClick={() => navigate("/useDebugValue")}>
                Ver Ejemplo
              </button>
            </td>
          </tr>

          <tr>
            <td>useMemo</td>
            <td>Se utiliza para memorizar el resultado de un cálculo y evitar que se ejecute nuevamente en cada render.</td>
            <td>Performance</td>
            <td>
              <button onClick={() => navigate("/useMemo")}>
                Ver Ejemplo
              </button>
            </td>
          </tr>
          <tr>
            <td>useDeferredValue</td>
            <td>Permite retrasar la actualización de un valor para mejorar el rendimiento de la interfaz.</td>
            <td>Performance</td>
            <td>
              <button onClick={() => navigate("/useDeferredValue")}>
                Ver Ejemplo
              </button>
            </td>
          </tr>
          <tr>
            <td>useEffect</td>
            <td>Permite ejecutar efectos secundarios después de renderizar un componente.</td>
            <td>Efectos</td>
            <td>
              <button onClick={() => navigate("/useEffect")}>
                Ver Ejemplo
              </button>
            </td>
          </tr>
          <tr>
            <td>useActionState</td>
            <td>Permite manejar el estado de acciones, especialmente en formularios y procesos asincrónicos.</td>
            <td>Nuevos</td>
            <td>
              <button onClick={() => navigate("/useActionState")}>
                Ver Ejemplo
              </button>
            </td>
          </tr>

                <tr>
            <td>useReducer</td>
            <td>Maneja estados complejos utilizando acciones y reducers.</td>
            <td>Estado</td>
            <td>
              <button onClick={() => navigate("/useReducer")}>
                Ver ejemplo
              </button>
            </td>
          </tr>

          <tr>
            <td>useRef</td>
            <td>Permite acceder directamente a elementos del DOM.</td>
            <td>Referencias</td>
            <td>
              <button onClick={() => navigate("/useRef")}>
                Ver ejemplo
              </button>
            </td>
          </tr>

          <tr>
            <td>useImperativeHandle</td>
            <td>Permite que un componente hijo exponga funciones al padre.</td>
            <td>Referencias</td>
            <td>
              <button onClick={() => navigate("/useImperativeHandle")}>
                Ver ejemplo
              </button>
            </td>
          </tr>

          <tr>
            <td>useCallback</td>
            <td>Memoriza funciones para mejorar el rendimiento.</td>
            <td>Performance</td>
            <td>
              <button onClick={() => navigate("/useCallback")}>
                Ver ejemplo
              </button>
            </td>
          </tr>

          <tr>
            <td>useLayoutEffect</td>
            <td>Ejecuta código después del render antes de que el navegador pinte la pantalla.</td>
            <td>Efectos</td>
            <td>
              <button onClick={() => navigate("/useLayoutEffect")}>
                Ver ejemplo
              </button>
            </td>
          </tr>

          <tr>
            <td>useId</td>
            <td>Genera identificadores únicos para elementos del DOM.</td>
            <td>Contexto / Accesibilidad</td>
            <td>
              <button onClick={() => navigate("/useId")}>
                Ver ejemplo
              </button>
            </td>
          </tr>

          <tr>
            <td>use()</td>
            <td>Permite consumir promesas o contextos directamente.</td>
            <td>Datos</td>
            <td>
              <button onClick={() => navigate("/use")}>
                Ver ejemplo
              </button>
            </td>
          </tr>
          <tr>
            <td>useContext</td>
            <td>Permite acceder a los datos de un Context de React dentro de un componente sin necesidad de pasar props manualmente entre múltiples niveles de componentes.</td>
            <td>Contexto</td>
            <td>
              <button onClick={() => navigate("/useContext")}>
                Ver ejemplo
              </button>
            </td>
          </tr>
          <tr>
            <td>useSyncExternalStore</td>
            <td>Permite a los componentes de React suscribirse a un store externo y mantenerse sincronizados cuando el estado cambia fuera de React.</td>
            <td>Contexto / Estado externo</td>
            <td>
              <button onClick={() => navigate("/useSyncExternalStore")}>
                Ver ejemplo
              </button>
            </td>
          </tr>
          <tr>
            <td>useTransition</td>
            <td>Permite marcar ciertas actualizaciones de estado como no urgentes, para que React pueda priorizar actualizaciones importantes y evitar bloquear la interfaz.</td>
            <td>Performance</td>
            <td>
              <button onClick={() => navigate("/useTransition")}>
                Ver ejemplo
              </button>
            </td>
          </tr>
          <tr>
            <td>useInsertionEffect</td>
            <td>Permite ejecutar código antes de que React actualice el DOM, normalmente para insertar estilos dinámicos y evitar problemas visuales.</td>
            <td>Efectos</td>
            <td>
              <button onClick={() => navigate("/useInsertionEffect")}>
                Ver ejemplo
              </button>
            </td>
          </tr>
          <tr>
            <td>useOptimistic</td>
            <td>Permite actualizar la interfaz de forma optimista, mostrando el cambio inmediatamente mientras se espera la respuesta del servidor.</td>
            <td>Nuevos hooks / Estado optimista</td>
            <td>
              <button onClick={() => navigate("/useOptimistic")}>
                Ver ejemplo
              </button>
            </td>
          </tr>
          <tr>
            <td>useFormStatus</td>
            <td>Permite conocer el estado de un formulario mientras se envía, por ejemplo si está pendiente, para actualizar la interfaz (botones, loaders, etc.).</td>
            <td>Nuevos hooks / Formularios</td>
            <td>
              <button onClick={() => navigate("/useFormStatus")}>
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