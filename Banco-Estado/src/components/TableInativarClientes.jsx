import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';


const TableInativarClientes = () => {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetchClientesAtivos();
    }, []);

    const excluirCliente = async (cpf) => {

        try {
            await fetch(`http://localhost:8000/clientesDelete/${cpf}`, {
                method: 'DELETE',
            });
            
            fetchClientesAtivos(); // Atualiza a lista de clientes após a exclusão
        } catch (error) {
            console.error('Erro ao excluir cliente', error);
        }
    };

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
                    <th>INATIVAR</th>


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
                        <td>
                            <button className="btnExcluiCliente" onClick={() => excluirCliente(cliente.cpf)} >Excluir</button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}


export default TableInativarClientes;