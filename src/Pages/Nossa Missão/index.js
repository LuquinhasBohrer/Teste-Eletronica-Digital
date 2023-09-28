import React from "react";
import Cabecalho from "../../componentes/cabeçalho/cabeçalho";
import Rodape from "../../componentes/Rodapé/rodape";
import HeroTexto from "../../componentes/hero textos/heroTextos";
import Blocos from "../../componentes/Blocos/blocos";
import Whatsapp from "../../componentes/Whatsapp"

const Missao = () => {
    return (
        <div>
            <Whatsapp />
            <Cabecalho  />;
            <HeroTexto texto="Solucionar de maneira prática e agil a expectativa do cliente e dando a
          ele a plena satisfação!" />;
            <Blocos />;
            <Rodape />
        </div>
    )
}

export default Missao;