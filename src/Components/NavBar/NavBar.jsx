import React from "react";
import "./nav-foot.css";
import LocalFireDepartmentTwoToneIcon from "@mui/icons-material/LocalFireDepartmentTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <React.Fragment>
      <header>
        <nav className="principalNav">
          <div className="logo">
            <a href="/">
              <img className="logoVvape" src="/navlogo2.png" alt="logo" />
            </a>
          </div>
          <ul className="navtitles">
            <a href="/">
              <li>
                <AccountCircleTwoToneIcon className="prof" />
                Perfil
              </li>
            </a>
            <a href="/">
              <li>
                <LocalFireDepartmentTwoToneIcon className="fire" />
                Productos
              </li>
            </a>
            <a href="/">
              <li>
                <CartWidget />
              </li>
            </a>
          </ul>
          <i id="burger" className="fa-solid fa-bars navicon" />
        </nav>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
