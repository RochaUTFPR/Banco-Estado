import React from "react";
import './TelaAtivosClientes.css';

import TableAtivosClientes from "../../components/TableAtivosClientes";

function TelaAtivosClientes() {

    return (
        <div className="tela-buscar-funcionario">

            <h1>Clientes Ativos</h1>

            <div className="table">
                <TableAtivosClientes />
            </div>
        </div>
    )
};

export default TelaAtivosClientes;