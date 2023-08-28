import React from "react";
import './TelaContatos.css';

const TelaContatos = () => {
    return (
        <div className="tela-contatos">
                <div className="contatos">
                    <p>Contatos</p>
                </div>

                <div className="regiao-metropolitana">
                    <p className="p-title">Região Metropolitana</p>
                    <p>0800-800-952</p>
                </div>

                <div className="gerente">
                    <p className="p-title">Gerente Luiz</p>
                    <p>1923-5963-8932</p>
                </div>
            </div>
            
    )
}

export default TelaContatos;