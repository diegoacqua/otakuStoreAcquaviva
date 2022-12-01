import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";
import cartContext from "../../storage/CartContent";

function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);

  const { addToCart } = useContext(cartContext);

  function handleAddToCart(cantidad) {
    Swal.fire({
      title: `Item ${product.title} agregado al carrito`,
      text: `Se han agregado ${cantidad} unidades`,
      icon: "success",
      confirmButtonColor: "Cool",
    });

    const itemForCart = {
      ...product,
      cantidad,
    };

    addToCart(itemForCart);

    setIsInCart(true);
  }

  return (
    <div className="card-detail">
      <div className="card-detail-img">
        <img src={product.imgurl} alt="template" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">${product.price}</h4>
      </div>
      {!isInCart ? (
        <ItemCount
          text="Agregar al carrito"
          handleAddToCart={handleAddToCart}
          stock={product.stock}
        />
      ) : (
        <div>
          <button>Ir al carrito</button>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
