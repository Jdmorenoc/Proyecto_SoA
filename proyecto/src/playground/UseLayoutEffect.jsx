import React, { useRef, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

function UseLayoutEffect() {

  const navigate = useNavigate();

  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.offsetWidth);
    }
  }, []);

  return (
    <div>

      <button onClick={() => navigate("/")}>Volver a Home</button>

      <h2>Ejemplo del Hook useLayoutEffect</h2>

      <p>
        useLayoutEffect permite ejecutar código después del render pero antes
        de que el navegador dibuje la pantalla.
      </p>

      <div
        ref={boxRef}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "black",
          marginTop: "20px"
        }}
      >
        Caja de ejemplo
      </div>

      <h3>Ancho de la caja: {width}px</h3>

    </div>
  );
}

export default UseLayoutEffect;