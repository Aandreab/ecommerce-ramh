import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Subscribe from "../Subscription/Subscribe.js";
import { useState, useEffect } from "react";
import "./Navbar.css";
import Home from "../Home/Home.jsx";
const NavItem = (props) => <Box as="a" href="#" fontSize="sm" {...props} />;

export const Navbar = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  console.log(token);
  return (
    <Box id="navbar" as="header" pb="20" height={"3em"} bg={"#152D35"}>
      <Box px="4" bg={"#152D35"} h={"6em"}>
        <Flex justify={"space-evenly"} flexShrink={"1"}>
          <HStack spacing={"2"} pt={"1.75em"}>
            <NavItem _hover={{ borderBottomWidth: "2px" }}>
              <Link
                to="/Home"
                style={{
                  color: "#EFFFFD",
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: "semi-bold",
                }}
              >
                Home
              </Link>
            </NavItem>
            <NavItem _hover={{ borderBottomWidth: "2px" }}>
              <Link
                to="/products"
                style={{
                  color: "#EFFFFD",
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: "semi-bold",
                }}
              >
                Products
              </Link>
            </NavItem>
            <NavItem _hover={{ borderBottomWidth: "2px" }}>
              <Link
                to="/events"
                style={{
                  color: "#EFFFFD",
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: "semi-bold",
                }}
              >
                Events
              </Link>
            </NavItem>
            <NavItem _hover={{ borderBottomWidth: "2px" }}>
              <Link
                to="/profile"
                style={{
                  color: "#EFFFFD",
                  padding: "15px",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: "semi-bold",
                }}
              >
                Profile
              </Link>
            </NavItem>
            <NavItem>
              <Button bgColor={"#152D35"}>
                <Link
                  to="/login"
                  style={{
                    color: "#EFFFFD",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "semi-bold",
                  }}
                >
                  Log In
                </Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button bgColor={"#152D35"}>
                <Link
                  to="/register"
                  style={{
                    color: "#EFFFFD",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "semi-bold",
                  }}
                >
                  Sign Up
                </Link>
              </Button>
            </NavItem>
            <NavItem _hover={{ borderBottomWidth: "2px" }} id="cart">
              <Link
                id="cart-link"
                to="/Home"
                style={{
                  color: "#EFFFFD",
                  padding: "15px",
                  fontSize: "20px",
                  fontWeight: "semi-bold",
                }}
              >
                Cart
              </Link>
            </NavItem>
          </HStack>
        </Flex>
      </Box>
      <Routes>
        <Route path="*" element={<Home token={token} />} />
        {/* <Route path="products" element ={<Products />} /> */}
        {/* <Route path="events" element ={<Events />} /> */}
        {/* <Route path="profile" element={<Profile token={token} />} /> */}
        <Route path="subscribe" element={<Subscribe />} />
        <Route path="login" element={<Login setToken={setToken} />} />
        <Route path="register" element={<Register setToken={setToken} />} />
      </Routes>
    </Box>
  );
};
export default Navbar;
