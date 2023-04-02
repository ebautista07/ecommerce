import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const clear = () => {
    Swal.fire({
      title: "¿Seguro que quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  if (orderId) {
    return (
      <div className="checkOut">
        <div
          className="fieldSet2"
          style={{
            fontFamily: "Nunito",
            display: "block",
            borderColor: "black",
            width: "70%",
          }}
        >
          <div className="flexForm">
            <div>
            <h1>¡Gracias por su compra!</h1>
            <br />
            Su número de orden es : {orderId}
            <br />
            </div>
            <br />
            <div>
              <button >
                <Link to="/" className="btnCheckout"  >SEGUIR COMPRANDO</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {!showForm ? (
        <div className="cart-container">
          <div className="container-items">
            {cart.map((item) => {
              return (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt="" className="img"/>
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <h2>${toThousand(item.price)}</h2>
                    <h2>Cantidad: {item.quantity}</h2>
                    <Button
                      className="btn3"
                      color="secondary"
                      variant="contained"
                      onClick={() => deleteProductById(item.id)}
                      style={{
                        fontFamily: "Nunito",
                        backgroundColor: "#de5764",
                      }}
                    >
                      Quitar del carrito
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-info">
            <h1>Precio total: ${toThousand(getTotalPrice())}</h1>
            {/* <h3>Descuento: - </h3> */}
            {/* <h3>Precio final: -</h3> */}

            {cart.length > 0 && (
              <div className="btn-cart">
                <Button
                  className="btn3"
                  variant="contained"
                  onClick={() => setShowForm(true)}
                >
                  Terminar la compra
                </Button>
                <Button className="btn3" onClick={clear} variant="contained">
                  Vaciar carrito
                </Button>
              </div>
            )}

            {/* <h1>El total del carrito es ${getTotalPrice()}</h1> */}
          </div>
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
