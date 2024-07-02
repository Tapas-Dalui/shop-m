import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/Shop.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { IoCartOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
  

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/womens") {
      setMenu("Womens");
    } else if (location.pathname === "/") {
      setMenu("Shop");
    } else if (location.pathname === "/mens") {
      setMenu("Mens");
    } else if (location.pathname === "/kids") {
      setMenu("Kids");
    } else {
      setMenu(" ");
    }
  }, [location]);

  return (
    <>
      <nav className="container">
        <img src={logo} className="logo" />
        <ul className={mobileMenu ? "hide-mobile-menu" : ""}>
          <li
            onClick={() => {
              setMenu("Shop");
            }}
          >
            {" "}
            <Link to="/">Shop</Link> {menu === "Shop" ? <hr /> : <></>}{" "}
          </li>
          <li
            onClick={() => {
              setMenu("Mens");
            }}
          >
            <Link to="/mens">Mens</Link> {menu === "Mens" ? <hr /> : <></>}{" "}
          </li>
          <li
            onClick={() => {
              setMenu("Womens");
            }}
          >
            <Link to="/womens">Womens</Link>{" "}
            {menu === "Womens" ? <hr /> : <></>}{" "}
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
            }}
          >
            <Link to="/kids">Kids</Link> {menu === "Kids" ? <hr /> : <></>}{" "}
          </li>
          <li><Link to="/login" onClick={window.scrollTo(0, 0)}
            className='btn-colored'>Login</Link></li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/cart">
            <IoCartOutline className="cart-icon" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        <FaBarsStaggered className="menu-icon-black" onClick={toggleMenu} />
      </nav>
    </>
  );
}

export default Navbar;
