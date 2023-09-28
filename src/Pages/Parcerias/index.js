import React from "react";
import Cabecalho from "../../componentes/cabeçalho/cabeçalho";
import Rodape from "../../componentes/Rodapé/rodape"
import Whatsapp from "../../componentes/Whatsapp/index"
import Lista from "../../componentes/Lista Parcerias/parcerias";
import HeroTexto from "../../componentes/hero textos/heroTextos";


const Parcerias = () => {
    return (
        <div> 
            <Whatsapp />
            <Cabecalho />;
            <HeroTexto texto="Somos rede autorizada das principais marcas de som automotivo do Brasil!" 
                        paragrafo="Além de sermos autorizada da Planatc e Kitec"  />
            <Lista />;
            <Rodape />
        </div>
    )
}

export default Parcerias;