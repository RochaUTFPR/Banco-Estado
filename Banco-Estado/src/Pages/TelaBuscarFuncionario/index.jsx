import React from "react";
import './TelaBuscarFuncionario.css';
import iconBuscar from '../img/icon-buscar.svg'
import TableBuscarFuncionario from "../../components/TableBuscarFuncionario";

function TelaBuscarFuncionario() {

    return (
        <div className="tela-buscar-funcionario">

            <h1>Buscar</h1>

            <div className="buscar">
                <div className="btnBuscar">
                    <input
                        id="buscar"
                        type="text"
                        name="buscar"
                        placeholder="Buscar"

                    />
                    <button id="btnBuscar"><img src={iconBuscar} alt="Botao Buscar" /></button>
                </div>
            </div>

            <div className="table">
                <TableBuscarFuncionario />
            </div>
        </div>
    )
};

export default TelaBuscarFuncionario;