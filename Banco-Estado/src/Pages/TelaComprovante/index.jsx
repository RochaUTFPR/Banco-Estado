import React from "react";
import './TelaComprovante.css'

const TelaComprovante = () => {
    return(
        <div className="tela-comprovante">
            <h1>Comprovante da Transferência</h1>

            <div className="parte-interna">
                <div className="quadrado-conta-origem">
                    <p>Conta de Origem</p>
                </div>

                <div className="itens-conta-origem">
                    <div><p className="atributos">Nº de Conta</p> <p className="atributos">Tipo de Conta</p></div>
                   

                    <div><p className="preencher">12354689-6</p> <p className="preencher" >Conta de Origem</p></div>

                    <div><p className="atributos" >Nº da Operação</p> <p className="atributos" >Data e Hora</p></div>
                

                    <div><p className="preencher" >12354689</p> <p className="preencher" >30/03/2021 21:00:07</p></div>
                   
                </div>


                <div className="quadrado-conta-destinatario">
                    <p>Conta do Destinátário</p>
                </div>

                <div className="itens-conta-destinatario">
                    <div><p className="atributos" >Nome</p> <p className="atributos" >Banco</p> <p className="atributos" >Nº da Conta</p></div>

                    <div><p className="preencher" >Carolina</p> <p className="preencher" >Banco Estado</p> <p className="preencher" >00-520-607055-08</p></div>
    

                    <div><p className="atributos"  >Descrição</p> <p className="atributos"  >Tipo da Conta</p></div>
          

                    <div><p className="preencher" >Supermercado</p> <p className="preencher" >Conta Corrente</p></div>
           
                </div>

            </div>

            
        </div>
    )
}

export default TelaComprovante;