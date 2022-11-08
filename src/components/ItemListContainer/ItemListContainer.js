import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getItemsFromAPI, {
  getItemsFromAPIByCategory,
} from "../../MockService/MockService";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  let [productsList, setProductsList] = useState([]);
  const { categoryid } = useParams();
  console.log(categoryid);

  useEffect(() => {
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid).then((itemsDB) => {
        setProductsList(itemsDB);
      });
    } else {
      getItemsFromAPI().then((itemsDB) => {
        setProductsList(itemsDB);
      });
    }
  }, [categoryid]);

  return (
    <>
      <ItemList productsList={productsList} />
    </>
  );
}

export default ItemListContainer;
