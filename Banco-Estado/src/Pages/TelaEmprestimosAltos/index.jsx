import React from "react";
import './TelaTransferirAlto.css';

import TableEmprestimossAltas from "../../components/TableEmprestimosAltos";

function TelaEmprestimosAltosFuncionario() {
    const data = [
        { id: 1, coluna1: 'Rosângela', coluna2: '123456-8', coluna3: 'Corrente', coluna4: 'Empréstimo', informacoes: 'Teste' },
        { id: 2, coluna1: 'Rosângela', coluna2: '123456-8', coluna3: 'Corrente', coluna4: 'Empréstimo', informacoes: 'Informações adicionais 1' },
        { id: 3, coluna1: 'Rosângela', coluna2: '123456-8', coluna3: 'Corrente', coluna4: 'Empréstimo', informacoes: 'Informações adicionais 1' },
    ];

    return (
        <div className="tela-buscar-funcionario">

            <h1>Empréstimos Altos</h1>

            <div className="table">
                <TableEmprestimossAltas data={data} />
            </div>
        </div>
    )
};

export default TelaEmprestimosAltosFuncionario;