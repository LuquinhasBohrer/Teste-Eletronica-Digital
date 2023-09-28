import React from "react";
import Cabecalho from "../../componentes/cabeçalho/cabeçalho";
import "./style.css";
import Rodape from "../../componentes/Rodapé/rodape";
import EntreEmContato from "../../componentes/Email/email";

const Contato = () => {
    return (
        <div>
            <Cabecalho />;
            <EntreEmContato />;
            <Rodape />
        </div>
    )
}

export default Contato;