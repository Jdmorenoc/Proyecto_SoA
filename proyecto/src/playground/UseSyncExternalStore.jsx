import { useNavigate } from "react-router-dom";
import { useSyncExternalStore } from "react";

// Store externo
let count = 0;
let listeners = [];

const store = {
  subscribe: (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },

  getSnapshot: () => count
};

function increment() {
  count++;
  listeners.forEach(listener => listener());
}

function UseSyncExternalStoreExample() {

  const navigate = useNavigate();

  const value = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot
  );

  return (
    <div>

      <button onClick={() => navigate("/")}>
        Volver a Home
      </button>

      <h2>Ejemplo del Hook useSyncExternalStore</h2>

      <h3>Contador: {value}</h3>

      <button onClick={increment}>
        Incrementar
      </button>

    </div>
  );
}

export default UseSyncExternalStoreExample;