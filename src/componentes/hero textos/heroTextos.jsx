import React from "react";
import "./style.css";

const HeroTexto = (props) => {
    return (
        <section class="missao">
        <h2>
          {props.texto}
        </h2>
        <p>{props.paragrafo}</p>
      </section>
    );
}

export default HeroTexto;