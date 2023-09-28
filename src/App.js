import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle.css";
import Inicio from "./Pages/Home";
import Missao from "./Pages/Nossa Missão";
import Parcerias from "./Pages/Parcerias";
import Contato from "./Pages/Contato";
import NavBar from "./componentes/cabeçalho/mobile-navbar.js";


function Home() {
  return (
    <div className="Home">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />;
            <Route path="Nossa Missão" element={<Missao />} />;
            <Route path="Parcerias" element={<Parcerias />} />;
            <Route path="Contato" element={<Contato />} />;
          </Routes>;
      </BrowserRouter>;
    </div>
  );
}

export default Home;

