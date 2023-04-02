// import { BsFillCartCheckFill } from "react-icons/bs";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import "./CartWidget.css";

import { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <Link to="/cart">
      <div className="container-cart">
        <ShoppingCartTwoToneIcon
          style={{
            fontSize: "1.5rem",
            color: "#45d7da",
          }}
        />
        <div className="bubble-counter">
          <span>{total}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;


