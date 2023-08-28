import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';


const TableAtivosClientes = () => {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetchClientesAtivos();
    }, []);

    const fetchClientesAtivos = async () => {
        try {
            const response = await fetch('http://localhost:8000/clientesAtivos');
            const data = await response.json();
            setClientes(data);
        } catch (error) {
            console.error('Erro ao buscar clientes ativos', error);
        }
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>Estado Civil</th>
                    <th>Sexo</th>
                    <th>Data Nasc</th>
                    <th>Conta</th>
                    <th>Situação</th>
                    <th>Endereço</th>
                    
                    
                </tr>
            </thead>
            <tbody>
                {clientes.map((cliente) => (
                    <tr key={cliente.cpf}>
                        <td>{cliente.nome}</td>
                        <td>{cliente.cpf}</td>
                        <td>{cliente.telefone}</td>
                        <td>{cliente.estadocivil}</td>
                        <td>{cliente.sexo}</td>
                        <td>{cliente.nasc}</td>
                        <td>{cliente.conta}</td>
                        <td>{cliente.situacao}</td>
                        <td>{cliente.endereco}</td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}


export default TableAtivosClientes;