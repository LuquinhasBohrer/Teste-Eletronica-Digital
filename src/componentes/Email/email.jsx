import React from "react";

const EntreEmContato = () => {
    return (
        <>
         <section class="Contato">
            <form action="https://formsubmit.co/aaf6399f7513273ea50602940971a333" method="POST">
                    <label for="email">E-mail:</label><br />
                     <input type="email" name="email" id="email" required /><br />
                    <label for="message">Menssagem:</label>
                    <input type="hidden" name="_next" value="https://eletronicadigitalnh.com.br/contato/next.html" />
                     <input type="text" name="message" id="message" required />
                     <button type="submit">Enviar</button>
                </form> 
        </section>
        </>
    )
}

export default EntreEmContato;