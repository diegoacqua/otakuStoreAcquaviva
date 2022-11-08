import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Item({ product }) {
  let urlDetail = `/detalle/${product.id}`;

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
      <Link to={urlDetail}>
        <Button>Ver mas!</Button>
      </Link>
    </div>
  );
}

export default Item;
