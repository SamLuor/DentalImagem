import React from "react";
import Logo from "../../assets/logo.png";
import "./style.css";

const Header = ({ toggleSide }) => {
  return (
    <div className="nav-header">
      <img src={Logo} alt="logo da dentalimagem" />
      <div className="nav">
        <a href="#inicio">INICIO</a>
        <a href="#servicos">SERVIÇOS</a>
        <a href="#sobre">SOBRE</a>
        <a href="#contato">CONTATO</a>
      </div>
        <i className="fa-solid fa-bars icon-menu" 
        onClick={toggleSide} 
        />
    </div>
  );
};

export default Header;
