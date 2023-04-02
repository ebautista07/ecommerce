import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div >
      <h3 className={"container-btn"}>{contador}</h3>

      <button className={"btns2"}onClick={restar}> - </button>
      <button className={"btns"}onClick={() => onAdd(contador)}>AGREGAR AL CARRITO</button>
      <button className={"btns2"} onClick={sumar}> + </button>
      
    </div>
  );
};

export default ItemCount;
