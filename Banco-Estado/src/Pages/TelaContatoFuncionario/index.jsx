import React, { useState } from "react";
import './TelaContatoFuncionario.css';
import iconBuscar from '../img/icon-buscar.svg'
import TableContatoFuncionario from "../../components/TableContatoFuncionario";

function TelaContatoFuncionario() {
    const [busca, setBusca] = useState('');

    const handleBuscaChange = (event) => {
        setBusca(event.target.value);
    };

    return (
        <div className="tela-buscar-funcionario">

            <h1>Contatos</h1>

            <div className="buscar">
                <div className="btnBuscar">
                    <input
                        id="buscar"
                        type="text"
                        name="buscar"
                        placeholder="Buscar por nome"
                        value={busca}
                        onChange={handleBuscaChange}
                    />
                    <button id="btnBuscar"><img src={iconBuscar} alt="Botao Buscar" /></button>
                </div>
            </div>

            <div className="table">
                <TableContatoFuncionario busca={busca} />
            </div>
        </div>
    )
};

export default TelaContatoFuncionario;