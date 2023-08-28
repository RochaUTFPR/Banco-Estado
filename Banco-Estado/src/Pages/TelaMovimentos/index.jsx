import React from "react";
import './TelaMovimentos.css';
import iconBuscar from '../img/icon-buscar.svg'
import iconFiltro from '../img/icon-filtro.svg'
import iconBaixar from '../img/icon-baixar.svg'
import TableMovimentos from "../../components/TableMovimentos";


const TelaMovimentos = () => {
    return (
        //tem que colocar o Breadcrumb ainda
        <div className="tela-movimentos">
            <h1>Movimentos</h1>

            <div className="botoes">
                <div className="btnBuscar">
                    <input
                        id="buscar"
                        type="text"
                        name="buscar"
                        placeholder="Buscar"

                    />
                    <button id="btnBuscar"><img src={iconBuscar} alt="Botao Buscar" /></button>
                </div>

                <div className="btnFiltro">
                    <button id="btnFiltro">Filtro<img src={iconFiltro} alt="Botao Filtro" /></button>
                </div>

                <div className="btnBaixar">
                    <button id="btnBaixar">Baixar<img src={iconBaixar} alt="Botao Baixar" /></button>
                </div>

            </div>

            <div className="table">
                <TableMovimentos />
            </div>
              
        </div>
    )
}

export default TelaMovimentos;