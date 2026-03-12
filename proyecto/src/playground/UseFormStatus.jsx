import { useNavigate } from "react-router-dom";
import { useFormStatus } from "react-dom";

function SubmitButton() {

  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
}

function UseFormStatusExample() {

  const navigate = useNavigate();

  async function handleSubmit() {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  return (
    <div>

      <button onClick={() => navigate("/")}>
        Volver a Home
      </button>

      <h2>Ejemplo del Hook useFormStatus</h2>

      <form action={handleSubmit}>
        <input type="text" placeholder="Escribe algo..." />
        <SubmitButton />
      </form>

    </div>
  );
}

export default UseFormStatusExample;