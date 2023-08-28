import React from "react";
import './TelaTransferirAlto.css';
import iconBuscar from '../img/icon-buscar.svg'
import TableBuscarFuncionario from "../../components/TableBuscarFuncionario";
import TableTransferenciasAltas from "../../components/TableTransferenciasAltas";

function TelaTransferenciasAltasFuncionario() {
    const data = [
        { id: 1, coluna1: 'Rosângela', coluna2: '123456-8', coluna3: 'Corrente', coluna4: 'Transferência Alta', informacoes: 'Teste' },
        { id: 2, coluna1: 'Rosângela', coluna2: '123456-8', coluna3: 'Corrente', coluna4: 'Transferência Alta', informacoes: 'Informações adicionais 1' },
        { id: 3, coluna1: 'Rosângela', coluna2: '123456-8', coluna3: 'Corrente', coluna4: 'Transferência Alta', informacoes: 'Informações adicionais 1' },
    ];

    return (
        <div className="tela-buscar-funcionario">

            <h1>Transferências Altas</h1>

            <div className="table">
                <TableTransferenciasAltas data={data} />
            </div>
        </div>
    )
};

export default TelaTransferenciasAltasFuncionario;