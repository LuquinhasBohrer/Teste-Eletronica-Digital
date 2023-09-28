import React from "react";
import Whats from "./icon-whatsApp.png"
import "./style.css"

const Whatsapp = () => {
    return (
        <>
         <div class="whats">
        <a
          href="https://wa.me/555135875782?text=Olá%20estou%20entrando%20em%20contato%20através%20do%20site.%20Poderia%20me%20ajudar?"
          target="_blank"
        >
          <img
            src={Whats}
            width="75"
            alt="Fale conosco pelo WhatsApp"
            title="Fale conosco pelo WhatsApp"
          />
        </a>
      </div>
        </>
    )
}

export default Whatsapp;