import React, { useState } from "react";
import Button from "../Button/Button";

function ItemCount({ stock, handleAddToCart, text }) {
  const [cantidad, setCantidad] = useState(1);

  function handleIncrement() {
    if (cantidad < stock) setCantidad(cantidad + 1);
  }

  function handleDecrement() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  return (
    <div>
      <Button onClick={handleDecrement}>-</Button>
      <p>{cantidad}</p>
      <Button onClick={handleIncrement}>+</Button>
      <br />
      <Button onClick={() => handleAddToCart(cantidad)}>{text}</Button>
    </div>
  );
}

export default ItemCount;
