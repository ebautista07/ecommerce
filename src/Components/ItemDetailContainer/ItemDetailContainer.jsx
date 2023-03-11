import React from "react";
import "./ItemDetailContainer.css";

import { useParams } from "react-router-dom";

import { products } from "../../products";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos `);
  };

  return (
    <div>
      <h1>{productSelected.title}</h1>
      <div>
        <img className="image" src={productSelected.img} alt="" />
      </div>
      <span>{productSelected.description}</span>
      <div>{productSelected.price}</div>
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
