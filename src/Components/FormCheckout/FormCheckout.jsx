import React, { useState } from "react";
import "./FormCheckout.css";

import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product;
    });
  };

  return (
    <div>
      <div className="fieldSet">
      <form onSubmit={handleSubmit} className="form1">
        <div className="form">
          <label className="title">Ingresa tu nombre: </label>
          <input
            type="text"
            placeholder="Nombre"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </div>

        <div className="form"><label className="title">Ingresa tu e-mail: </label>
        <input
          type="text"
          placeholder="E-mail"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        /></div>
        
        <div className="form"><label className="title">Ingresa tu número de teléfono: </label>
        <input
          type="text"
          placeholder="Teléfono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        /></div>
        
        <div className="btnF">
        <button type="submit" className="btn">TERMINAR LA COMPRA</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default FormCheckout;
