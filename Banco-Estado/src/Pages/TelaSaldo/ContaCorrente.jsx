import React, { useEffect, useState } from "react";
import './Saldo.css';
import axios from 'axios';






const TelaSaldoCorrente = () => {

    const [data, setData] = useState([]);

    
    
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
            };
            
            fetchData();
        }, []);
   
    return (
        <div className="tela-saldo">
            <h1>Saldo</h1>

            <div className="conta-corrente">
                <p className="conta-p">Conta Corrente</p>
                <div className="componentes" >
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
    )
}

export default TelaSaldoCorrente;