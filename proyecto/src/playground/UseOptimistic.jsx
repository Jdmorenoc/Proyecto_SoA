import { useNavigate } from "react-router-dom";
import { useState, useOptimistic } from "react";

function UseOptimisticExample() {

  const navigate = useNavigate();

  const [comments, setComments] = useState([]);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment]
  );

  const handleAddComment = async () => {

    const newComment = "Nuevo comentario";

    // Actualización optimista
    addOptimisticComment(newComment);

    // Simulación de petición al servidor
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Confirmación real
    setComments(prev => [...prev, newComment]);
  };

  return (
    <div>

      <button onClick={() => navigate("/")}>
        Volver a Home
      </button>

      <h2>Ejemplo del Hook useOptimistic</h2>

      <button onClick={handleAddComment}>
        Agregar comentario
      </button>

      <ul>
        {optimisticComments.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

    </div>
  );
}

export default UseOptimisticExample;