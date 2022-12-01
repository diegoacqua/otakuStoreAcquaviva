import React, { useContext } from "react";
import cartContext from "../../storage/CartContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  const { itemsInCart } = useContext(cartContext);

  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} />
      <small>{itemsInCart()}</small>
    </>
  );
}

export default CartWidget;
