import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../MockService/MockService";
import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let params = useParams();
  let idParams = params.id;

  useEffect(() => {
    getSingleItemFromAPI(idParams)
      .then((itemsDB) => {
        setProduct(itemsDB);
      })
      .catch((error) => alert(error));
  }, [idParams]);

  return (
    <div className="card">
      <div className="card-img">
        <img src={product.imgurl} alt="product img" />
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.detail}</p>
        <h4 className="priceTag">${product.price}</h4>
      </div>
      <ItemCount stock={product.stock} />
      <Button>Comprar ahora!</Button>
    </div>
  );
}

export default ItemDetailContainer;
