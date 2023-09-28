import React from "react";
import './style.css';

const Localizacao = () => (
    <><section class="info">
        <div class="mapa">
            <h3>Onde estamos?</h3>
        <hr />
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1733.3365210075908!2d-51.105180844194116!3d-29.671260720978434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951943db0f3ea7d7%3A0x3cd8b71b3b83a315!2sEletronica%20Digital!5e0!3m2!1spt-BR!2sbr!4v1673542923329!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{border: "1"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>Rua Jaboti, 42, sala 203, São Jorge, Novo Hamburgo</p>
    </div><div class="contato">
            <h2>Contatos:</h2>
            <br />
            <ul>
                <li class="celular">
                    <i class="fa-sharp fa-solid fa-phone-volume"></i>
                    <p>(+55) 51 99603-6223</p>
                </li>
                <br />
                <li class="telefone">
                    <i class="fa-sharp fa-solid fa-phone-volume"></i>
                    <p>(+55) 51 3587-5782
                    </p>
                </li>
                <br />
                <li class="email">
                    <i class="fa-sharp fa-solid fa-envelope"></i>
                    <a href="mailto:contato@eletronicadigitalnh.com.br?subject=Eletrônica Digital&cc=contato@eletronicadigital.com.br&bcc=contato@eletronicadigital.com.br&body=Olá, me chamo:           e estou entrando em contato por motivo:">
                        <p>contato@eletronicadigitalnh.com.br</p>
                    </a>
                </li>
            </ul>
        </div>
    </section>
    </>
)

export default Localizacao;