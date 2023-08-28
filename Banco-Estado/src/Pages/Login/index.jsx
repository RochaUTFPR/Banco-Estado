import './login.css';
import logo from '../img/bancoestado-logo.png';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';




function Login() {
    const navigate = useNavigate();
    const [id_conta, setNConta] = useState();
    const [senha, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //const enviando = {id_conta, senha}
        //console.log("dados",enviando);
        try {
            const response = await axios.get('http://localhost:8000/login', {
              params: {
                id_conta: id_conta,
                senha: senha,
              }
            });
            const contateste = response.data.map(result => result.id_conta);
            const senhateste = response.data.map(result => result.senha);
            //console.log("teste dentro do try",contateste)
            //console.log("teste dentro do try",senhateste)

            if (contateste == id_conta && senhateste == senha) {
                {navigate('/Sistema')}
                //passando o id da conta pelo localStorage
                localStorage.setItem('data', id_conta);
            }else {
                alert("Conta ou senha incorretos")
            }

          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }

        // Limpar os campos
        setNConta("");
        setPassword("");
    }


    return (
        <div className="page-login">
            <div className="quadrado">
            </div>
            <div className="login">
                <img className="imgLogo" src={logo} alt="Banco Estado" />
                <p className="login-title">Entre com seus dados:</p>
                
                <form className="form" autoComplete="none" onSubmit={handleSubmit}>
                    <div className="forms">
                        <label htmlFor="numeroConta">Número da Conta:</label>
                        <input 
                            id="numberConta" 
                            type="text" 
                            name="numberConta" 
                            autoComplete="none" 
                            placeholder="Ex:12345-5" 
                            value={id_conta} 
                            onChange={(e) => setNConta(e.target.value)} />
                    </div>

                    <div className="forms">
                        <label htmlFor="password">Senha:</label>
                        <input 
                            id="password" 
                            type="password" 
                            name="password" 
                            placeholder="*******" 
                            value={senha}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <button id="btnEntrar" type="submit"  >Entrar</button>
                </form>

            </div>

            <div className="quadrado">
            </div>
        </div>

    );
};

export default Login;