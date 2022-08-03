import "./Navbar2.css";
import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Products from "../Products/Products.jsx";
import Home from "../Home/Home.jsx";
import Profile from "../Profile/Profile.jsx";
import Newsletter from "../Newsletter/Newsletter.jsx";
import About from "../About/About.jsx";
import Cart from "../Cart/Cart.jsx";
import Login from "../Login/Login";
import Register from "../Register/Register.jsx";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
export default function Navbar2() {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  console.log(token);
  return (
    <div>
      <nav className="navbar-two">
        <div className="navbar-container">
          <div className="navbar-left">
            <Link className="left-nav-links" to="/Home">
              HOME
            </Link>
            <Link className="left-nav-links" to="/Products">
              COMICS
            </Link>
            <Link className="left-nav-links" to="/Newsletter">
              NEWSLETTER
            </Link>
            <Link className="left-nav-links" to="/About">
              ABOUT
            </Link>
          </div>
          <div className="navbar-right">
            {/* {token ? <Link className='right-nav-links' to="/Profile"><CgProfile className='nav-icons' size={20} /></Link>: null} */}
            <Link className="right-nav-links" to="/Profile">
              <Button className="rounded-circle" variant="outline-secondary" size="sm" style={{ width: "2.4rem", height: "2.4rem", position: "relative" }}>
                <CgProfile className="nav-icons" size={20} />
              </Button>
            </Link>
            <Link className="right-nav-links" to="/">
              <Button className="rounded-circle" variant="outline-secondary" size="sm" style={{ width: "2.4rem", height: "2.4rem", position: "relative" }}>
                <FaRegHeart className="nav-icons" size={20} />
              </Button>
            </Link>
            <Link className="right-nav-links" to="/Cart">
              <Button className="rounded-circle" variant="outline-secondary" size="sm" style={{ width: "2.4rem", height: "2.4rem", position: "relative" }}>
                <HiOutlineShoppingCart className="nav-icons" size={20} />
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)",
                  }}
                >3</div>
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="newsletter" element={<Newsletter />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile token={token} />} />
        <Route path="cart" element={<Cart />} />
        <Route path="register" element={<Register setToken={setToken} />} />
        <Route path="login" element={<Login setToken={setToken} />} />
      </Routes>
    </div>
  );
}
