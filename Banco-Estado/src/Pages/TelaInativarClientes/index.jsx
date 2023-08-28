import React from "react";
import './TelaInativarClientes.css';

import TableInativarClientes from "../../components/TableInativarClientes";

function TelaInativarClientes() {

    return (
        <div className="tela-buscar-funcionario">

            <h1>Inativar Cliente</h1>

            <div className="table">
                <TableInativarClientes />
            </div>
        </div>
    )
};

export default TelaInativarClientes;