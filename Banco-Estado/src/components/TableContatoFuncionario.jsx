import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const TableContatoFuncionario = ({ busca }) => {

    const [clientes, setClientes] = useState([]);



    useEffect(() => {
        const idFuncionario = localStorage.getItem('idFuncionario');

        const fetchData = async () => {
            try {

                const response = await axios.get('http://localhost:8000/ContasCorrenteFuncionario', {
                    params: {
                        idFuncionario: idFuncionario,
                    }
                });
                const data = response.data;
                setClientes(data);
            } catch (error) {
                console.error('Erro ao obter os dados dos clientes', error);
            }
        };

        fetchData();
    }, []);


    const clientesFiltrados = clientes.filter((cliente) =>
        cliente.nome_cliente.toLowerCase().includes((busca || '').toLowerCase())
    );


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Nº Conta</th>
                    <th>CPF</th>
                    <th>Contato</th>

                </tr>
            </thead>
            <tbody>
                {clientesFiltrados.map((data) => (
                    <tr key={data.conta_corrente}>
                        <td>{data.nome_cliente}</td>
                        <td>{data.conta_corrente}</td>
                        <td>{data.cpf_cliente}</td>
                        <td>{data.telefone}</td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}


export default TableContatoFuncionario;