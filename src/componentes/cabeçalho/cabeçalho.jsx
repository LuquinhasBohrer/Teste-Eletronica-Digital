import React, {useState} from "react";
import './style.css'
import { NavLink } from "react-router-dom";



const Cabecalho = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <div className="nav__wrapper">
      <nav className="nav container">
        <div className="nav__brand" id="logo">
          <NavLink to="/">  Eletrônica Digital</NavLink>
        </div>
        <ul className={active}>
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              Inicio
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Nossa Missão" className="nav__link">
              Nossa Missao
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Parcerias" className="nav__link">
              Parcerias
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/Contato" className="nav__link">
              Contato Comercial
            </NavLink>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}


    export default Cabecalho;