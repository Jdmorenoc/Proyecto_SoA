import React, { useRef, useImperativeHandle, forwardRef } from "react";

const InputControl = forwardRef((props, ref) => {

  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    limpiar() {
      inputRef.current.value = "";
    },
    enfocar() {
      inputRef.current.focus();
    }
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Escribe algo aquí..."
    />
  );
});

export default InputControl;