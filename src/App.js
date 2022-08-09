import React from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "./components/Navbar2/Navbar2";
import "./App.css";
function App() {
  
  return (
    <div className="App">
    
      <Navbar2 />
      <Outlet />
    </div>
  );
}

export default App;
