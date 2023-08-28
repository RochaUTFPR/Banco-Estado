import './loginFuncionario.css';
import logo from '../img/bancoestado-logo.png';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';




function LoginFuncionario() {
    const navigate = useNavigate();
    const [id_funcionario, setIdFuncionario] = useState();
    const [senha, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //const enviando = {id_conta, senha}
        //console.log("dados",enviando);
        try {
            const response = await axios.get('http://localhost:8000/Loginfuncionario', {
              params: {
                id_funcionario: id_funcionario, //acho que deveria colocar numero de identificação do funcionario aqui
                senha: senha,
              }
            });
            const contateste = response.data.map(result => result.id_funcionario);
            const senhateste = response.data.map(result => result.senha);
            //console.log("teste dentro do try",contateste)
            //console.log("teste dentro do try",senhateste)

            if (contateste == id_funcionario && senhateste == senha) {
                {navigate('/SystemFuncionario')}
                //passando o id da conta pelo localStorage
                localStorage.setItem('idFuncionario', id_funcionario);
            }else {
                alert("Conta ou senha incorretos")
            }

          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }

        // Limpar os campos
        setIdFuncionario("");
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
                        <label htmlFor="numeroConta">Número de Identificação</label>
                        <input 
                            id="numberConta" 
                            type="text" 
                            name="numberConta" 
                            autoComplete="none" 
                            placeholder="Ex:12345-5" 
                            value={id_funcionario} 
                            onChange={(e) => setIdFuncionario(e.target.value)} />
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

export default LoginFuncionario;