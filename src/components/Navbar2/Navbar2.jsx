import "./Navbar2.css";
import * as React from "react";
import { images } from "../../constants";
import { Link, Routes, Route } from "react-router-dom";
import Products from "../../Routes/Products/Products.jsx";
import Home from "../../Routes/Home/Home.jsx";
import Profile from "../../Routes/Profile/Profile.js";
import Newsletter from "../../Routes/Newsletter/Newsletter.jsx";
import About from "../../Routes/About/About.jsx";
import Cart from "../../Routes/Cart/Cart.jsx";
import Login from "../../Routes/Login/Login";
import Register from "../../Routes/Register/Register.jsx";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import { getMyInfo, getCart } from "../../api";
import PrivacyPolicy from "../../Routes/PrivacyPolicy/PrivacyPolicy";

export default function Navbar2() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  const userHandler = async (token) => {
    const userInfo = await getMyInfo(token);
    setUser(userInfo);
  }
  const cartHandler = async (token) => {
    const myCart = await getCart(token);
    setCart(myCart);
}

  useEffect(() => {
    if (token) {
      userHandler(token);
      cartHandler(token);
    }
  }, [token])


  return (
    <div>
      <nav className="navbar-two">
        <div className="navbar-container">
          <div className="navbar-left">
            <Link className="left-nav-links" to="/Home">
              <img
                className="logo"
                src={images.logo}
                alt="logo"
              />
            </Link>
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
            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="tooltip-logout">Logout</Tooltip>}>
              <Link className="right-nav-links" to="/Login">
                {token ? <Button className="rounded-circle" variant="outline-danger" size="sm" style={{ width: "2.4rem", height: "2.4rem", position: "relative", }} onClick={() => {
                  setToken('')
                  localStorage.removeItem('token')
                }}><AiOutlineLogout className="nav-icons" size={20} />
                </Button> : null}
              </Link>
            </OverlayTrigger>

              <div className="overlay-container">
                {token ? <Link className="right-nav-links" to="/Profile">
                  <Button className="rounded-circle" variant="outline-secondary" size="sm" style={{ width: "2.4rem", height: "2.4rem", position: "relative", }}>
                    <CgProfile className="nav-icons" size={20} />
                  </Button>
                </Link> : null}
              </div>

              <div className="overlay-container">
                {!token ? <Link className="right-nav-links" to="/Register">
                  <Button className="rounded-circle" variant="outline-secondary" size="sm" style={{ width: "2.4rem", height: "2.4rem", position: "relative", }}>
                    <CgProfile className="nav-icons" size={20} />
                  </Button>
                </Link> : null}
              </div>
   
              <div className="overlay-container">
                <Link className="right-nav-links" to="/">
                  <Button className="rounded-circle" variant="outline-secondary" size="sm" style={{ width: "2.4rem", height: "2.4rem", position: "relative", }}>
                    <FaRegHeart className="nav-icons" size={20} />
                  </Button>
                </Link>
              </div>
           
              <div className="overlay-container">
                <Link className="right-nav-links" to="/Cart">
                  <Button className="rounded-circle" variant="outline-secondary" size="sm" style={{ width: "2.4rem", height: "2.4rem", position: "relative", }}>
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
                    >
                      3
                    </div>
                  </Button>
                </Link>
              </div>
          
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="products" element={<Products token={token} setCart={setCart} user={user}/>} />
        <Route path="newsletter" element={<Newsletter />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile token={token} />} />
        <Route path="cart" element={<Cart token={token} cart={cart} user={user} setCart={setCart} />} />
        <Route path="register" element={<Register setToken={setToken} />} />
        <Route path="login" element={<Login setToken={setToken} />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}
