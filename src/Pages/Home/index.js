import React from "react";
import Cabecalho from "../../componentes/cabeçalho/cabeçalho";
import Hero from "../../componentes/hero/"
import Informacoes from "../../componentes/Inform";
import Localizacao from "../../componentes/onde estamos";
import Rodape from "../../componentes/Rodapé/rodape";
import Whatsapp from "../../componentes/Whatsapp";

function Inicio() {
    return (
        <div>
            <Whatsapp />
            <Cabecalho />;
            <Hero />
            <Informacoes />
            <Localizacao />
            <Rodape />
        </div>
    );
}

export default Inicio;