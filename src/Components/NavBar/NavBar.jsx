import React from "react";
import { Link } from "react-router-dom";
import "./nav-foot.css";
import LocalFireDepartmentTwoToneIcon from "@mui/icons-material/LocalFireDepartmentTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import SmokingRoomsTwoToneIcon from "@mui/icons-material/SmokingRoomsTwoTone";
import OpacityTwoToneIcon from "@mui/icons-material/OpacityTwoTone";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <React.Fragment>
      <header>
        <nav className="principalNav">
          <div className="logo">
            <Link to="/">
              <img className="logoVvape" src="/navlogo2.png" alt="logo" />
            </Link>
          </div>
          <ul className="navtitles">
            {/* <Link to="/">
              <li>
                <AccountCircleTwoToneIcon className="prof" />
                Perfil
              </li>
            </Link> */}
            <Link to="/">
              <li>
                <LocalFireDepartmentTwoToneIcon className="fire" />
                Productos
              </li>
            </Link>

            <Link to="/category/Vaper">
              <li>
                <SmokingRoomsTwoToneIcon className="vap" />
                Vaporizadores
              </li>
            </Link>
            <Link to="/category/liquid">
              <li>
                <OpacityTwoToneIcon />
                Esencias
              </li>
            </Link>
            <Link to="/cart">
              <li>
                <CartWidget className="cartIcon" />
              </li>
            </Link>
          </ul>
          <i id="burger" className="fa-solid fa-bars navicon" />
        </nav>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
