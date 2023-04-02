import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";


const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div className={"containerItemDetail"}>
      <div className={"containerImage"}>
        <img className={"img"} src={productSelected.img} alt="" />
      </div>

      <div className={"containerDetail"}>
        <h2 style={{ fontFamily: "Nunito" }}>
          {/* <span style={{ fontSize: "23px", fontFamily: "Nunito" }}>Nombre:</span>{" "} */}
          {productSelected.title}
        </h2>
        <br />
        <h2 style={{ fontFamily: "Nunito" }}>
          {/* <span style={{ fontSize: "23px", fontFamily: "Nunito" }}>Descripción:</span>{" "} */}
          {productSelected.description}
        </h2>
        <br />
        <h2 style={{ fontFamily: "Nunito" }}>
          {/* <span style={{ fontSize: "23px", fontFamily: "Nunito"}}>Precio:</span> */}
          ${productSelected.price}
        </h2>

        <ItemCount
          onAdd={onAdd}
          stock={productSelected.stock}
          initial={quantity}
        />
      </div>
      <div class="envios">
        <h4 class="tituloenvios">
          {" "}
          <i id="truck" class="fas fa-truck"></i> ENVÍO ESTÁNDAR NACIONAL{" "}
        </h4>
        <p class="gratis">
          Envío GRATIS en todas las órdenes superiores a $200.000. Los costos de
          envío se basan en el peso del paquete.
        </p>
        <p class="dias">
          Servicio de entrega en todo Colombia. Todos los pedidos de Lunes a
          Viernes antes de las 2:00 p.m. y Sábados antes de las 11:00 a.m. serán
          despachados el mismo día.{" "}
        </p>
        <p class="condiciones">
          {" "}
          *Aplica en órdenes de Lunes a Sábado. Órdenes colocadas Domingos y
          festivos serán procesadas el siguiente día hábil. **Órdenes con
          entrega en áreas de difícil acceso, podrían tomar más tiempo de lo
          estimado.
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
