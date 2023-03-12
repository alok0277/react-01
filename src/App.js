import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar/>
      <About />
      <Menu />
      <Clients />
      <Prices />
      <Footer/>
    </div>
  );
}

export default App;
