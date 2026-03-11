import { useNavigate } from "react-router-dom";
import useOnlineStatus from "./UseOnlineStatus";

function UseDebugValueExample() {

  const navigate = useNavigate();
  const online = useOnlineStatus();

  return (
    <div>

      <button onClick={() => navigate("/")}>
        Volver a Home
      </button>

      <h2>Ejemplo del Hook useDebugValue</h2>

      <h3>
        Estado de conexión: {online ? "🟢 Online" : "🔴 Offline"}
      </h3>

    </div>
  );
}

export default UseDebugValueExample;