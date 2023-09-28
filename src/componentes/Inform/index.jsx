import React from "react";
import './style.css';
import { Link } from "react-router-dom"

const Informacoes = () => {
    return (
        //SOBRE A EMPRESA//
        <section class="sobre-mim">
          <h3>Quem somos?</h3>
          <hr />
          <p>
            Somos uma empresa no ramo de tecnologia, realizando manutenção em
            diversos aparelhos, estando 30 anos no mercado, já passamos por várias
            fazes da Eletrônica.
          </p>
          <hr />
          <Link to="/Nossa Missão" class="btn">
            Saiba mais sobre a nossa Missão</Link>
        </section>
    )
}

export default Informacoes;