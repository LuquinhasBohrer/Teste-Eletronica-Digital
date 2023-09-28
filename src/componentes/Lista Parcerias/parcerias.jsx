import React from "react";
import "./style.css";
import Soundigital from "./img/Logo Sd";
import Taramps from "./img/Logo Taramps"
import Stetsom from "./img/Logo stetsom"
import JFA from "./img/Logo JFA"
import Planatc from "./img/Logo planatc"
import Kitec from "./img/Kitec logo"
import AGL from "./img/logo agl.webp"

const Lista = () => {
    return (
        <>
          <section class="cursos">
          <h3>Assistência próxima a você!</h3>
          <p>Somos a assistência com as 3 principais marcas de som automotivo! Além é claro das fontes automotivas e seus carregadores e também as máquinas de limpeza de bico.
          </p>
          <hr />
          <ul class="grid">
              <li>
                <a href="https://soundigital.com/">
                  <img src={Soundigital} id="sd" />
                 <h4>Soundigital</h4></a>
                  <p>Inovando e buscando novas tecnologias, a SounDigital consolidou-se no mercado brasileiro e internacional, conquistando o seu espaço e respeito dentre os profissionais mais exigentes e renomados do setor.
                  </p>
              </li>
  
              <li>
                <a href="https://www.taramps.com.br/pt/">
                  <img src={Taramps} class="ta" />
                 <h4>Taramps</h4></a>
                  <p>O Grupo Taramps alcançou reconhecimento internacional após passar a fabricar módulos amplificadores classe D (digital) para sistemas de som automotivos e sendo pioneira em desenvolvimento e industrialização de módulos amplificadores de alta tensão alimentados por baterias em série.
                  </p>
              </li>
  
              <li>
                <a href="https://www.stetsom.com.br/pt/">
                  <img src={Stetsom} id="stetsom" />
                  <h4>Stetsom</h4></a>
                  <p>Projetados para serem objetos de desejo, os produtos STETSOM ocupam lugar de destaque no cenário de
                    som automotivo. 
                  </p>
              </li>
  
              <li>
                  <a href="https://jfaeletronicos.com/">
                  <img src={JFA} class="jfa" />
                  <h4>JFA</h4></a>
                  <p>A JFA Eletrônicos é o resultado de um sonho familiar, que nos tornou referência no Automotivo e nas Telecomunicações.

                    Em Março de 2004, os primos Flávio e Anderson iniciaram as atividades em uma garagem, na casa de um dos sócios.
                  </p>
              </li>
              
          </ul>
          <hr class="final" />
        
      </section>

      <section class="empresas">
        <ul class="grade">
            <li>
              <a href="https://www.planatc.com.br/">
                <img src={Planatc} id="planatc" />
                <h4>Planatc</h4></a>
                <p>A PLANATC é uma indústria que tem 25 anos de mercado, na área de ferramentas e equipamentos eletrônicos.

                  Atuamos mais especificamente na fabricação de ferramentas e equipamentos eletrônicos para mecânica de automóveis.  </p>
            </li>

            <li>
              <a href="https://www.kitec.ind.br/" >
                <img src={Kitec} id="kitec" />                                             
                <h4>Kitec</h4></a>
                <p>No final dos anos 90 na região do grande ABC, surge a marca KITEC, com uma trajetória de trabalho árduo e muito perseverante de seus idealizadores. Trabalho este recompensado alguns anos pelo crescimento e grande aceitação desta marca, tornando-a competitiva e cada vez mais dentro da realidade do mercado, promovendo então grande satisfação de seus responsáveis. </p>
            </li>

            <li>
              <a href="https://www.aglbrasil.com/a-empresa">
                <img src={AGL} id="agl" />
                <h4>AGL</h4></a>
                <p>Fundada no município mineiro de Divinópolis, está há cerca de 38 anos no mercado de segurança eletrônica, nacional e internacional. Do início de nossa história, em uma modesta produção de fechaduras, encontramos a chave para abri-las e conquistarmos algo ainda maior, nos tornando, assim, referência em idoneidade e qualidade 
                </p>
            </li>
            
        </ul>
        <hr class="final" />
      
    </section>
        </>
    )
}
export default Lista;