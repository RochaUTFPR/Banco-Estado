import './TelaResumo.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';

const TelaResumo = () => {

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    
    
    useEffect (()  => {

        const id_conta2 = localStorage.getItem('data');


        const fetchData = async () => {

            try {
                const response = await axios.get('http://localhost:8000/SaldoContaCorrente', {
                  params: {
                  id_conta: id_conta2,
                  }
                });
                console.log(response)
                const saldo = response.data
                setData(saldo);
                } catch (error) {
                    console.error('Erro ao buscar dados:', error);
                }
                try {
                    const response = await axios.get('http://localhost:8000/SaldoContaPoupanca', {
                      params: {
                      id_conta: id_conta2,
                      }
                    });
                    console.log(response)
                    const saldo2 = response.data
                    setData2(saldo2);
                    } catch (error) {
                        console.error('Erro ao buscar dados:', error);
                    }
            };
            
            fetchData();
        }, []);

        

    return (

        <div className="tela-resumo">
            <div className="resumo">
                <h1>Resumo</h1>
                <div className="contas">
                    <p>Contas</p>
                </div>

                <div className="conta-poupanca">
                    <p className="conta-p">Conta Poupança</p>
                    <div className="componentes">
                    {(
                   data2.map((data) => (
                        <div className="componentes" key={data.id}>
                        <p>{data.id_conta_poupanca}</p>
                        <p>R${data.saldo}</p>
                        </div>
                    ))
                    )} 
                    </div>
                </div>

                <div className="conta-corrente">
                    <p className="conta-p">Conta Corrente</p>
                    <div className="componentes">
                    {(
                   data.map((data) => (
                        <div className="componentes" key={data.id}>
                        <p>{data.id_conta_corrente}</p>
                        <p>R${data.saldo}</p>
                        </div>
                    ))
                    )} 
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TelaResumo;