import React from "react";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';


const TableMovimentos = () => {

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
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Origem</th>
                    <th> - Saiu</th>
                    <th> + Entrou</th>
                    <th>Saldo $</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>26/04/2021</th>
                    <th>Transferência: José</th>
                    <th>Luz</th>
                    <th>$ 200.00</th>
                    <th> </th>
                    <th>$ 146.000.00</th>
                </tr>
                <tr>
                    <th>26/04/2021</th>
                    <th>Transferência: José</th>
                    <th>Luz</th>
                    <th>$ 200.00</th>
                    <th> </th>
                    <th>$ 146.000.00</th>
                </tr>
            </tbody>
        </Table>
    )
}


export default TableMovimentos;