import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../MockService/MockService";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

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

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
