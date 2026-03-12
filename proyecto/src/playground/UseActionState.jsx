import { useActionState } from "react";
import { useNavigate } from "react-router-dom";

async function enviarFormulario(prevState, formData) {
  const nombre = formData.get("nombre");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return `Formulario enviado por ${nombre}`;
}

function UseActionStateExample() {

  const navigate = useNavigate();

  const [estado, formAction, isPending] = useActionState(enviarFormulario, null);

  return (
    <div>

      <button onClick={() => navigate("/")}>
        Volver a Home
      </button>

      <h2>Ejemplo del Hook useActionState</h2>

      <form action={formAction}>
        <input
          type="text"
          name="nombre"
          placeholder="Escribe tu nombre"
        />

        <button type="submit">
          Enviar
        </button>
      </form>

      {isPending && <p>Enviando formulario...</p>}

      {estado && <p>{estado}</p>}

    </div>
  );
}

export default UseActionStateExample;