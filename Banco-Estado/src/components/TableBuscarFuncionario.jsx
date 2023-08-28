import React from "react";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';


const TableBuscarFuncionario = () => {

    // constructor (props) {
    //     super(props)

    //     this.state = {
    //         clientes : []
    //     }
    // }


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Nº Conta</th>
                    <th>Tipo de Conta</th>
                    <th>Pendências</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Rosângela</th>
                    <th>123456-6</th>
                    <th>Corrente</th>
                    <th>Empréstimo</th>
                </tr>

            </tbody>
        </Table>
    )
}


export default TableBuscarFuncionario;