import React from "react";
import { useSelector } from "react-redux";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom";

import "./css/Header.css";

export const Header = () => {
  const { cart } = useSelector((state) => state.products);

  const [toggle, setToggle] = React.useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={Menu} alt="" width="20px" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">Store</Link>
        </h1>
      </div>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/product">Sản phẩm</Link>
          </li>
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
          <li>
            <Link to="/about">Về chúng tôi</Link>
          </li>
          <li>
            <Link to="/login">Đăng nhâp / Đăng ký</Link>
          </li>
          <li className="close" onClick={menuToggle}>
            <img src={Close} alt="" width="20" />
          </li>
        </ul>
        <div className="nav-cart">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={CartIcon} alt="" width="20" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
