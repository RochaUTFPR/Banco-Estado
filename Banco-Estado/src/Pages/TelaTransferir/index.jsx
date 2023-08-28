import './TelaTransferir.css';
import TelaComprovante from "../TelaComprovante";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const TelaTransferir = () => {
    const [text, setText] = useState('');
    const [idconta, setIdconta] = useState('');
    const [data, setData] = useState([]);
    const [idtransferir, setIdtransferir] = useState();
    const [selectedOption2, setSelectedOption2] = useState('option1');
    const [valor, setValor] = useState();
    const [saldo2, setSaldo2] = useState(0);
    const [nome, setNome] = useState();

    const handleChange = (event) => {
        const newText = event.target.value;
        setText(newText);
    }

    const [showParte2, setShowParte2] = useState(false);


    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
        //console.log(event.target.value)
    };


    // função para iniciar as transferencias

    const handleClick = async (e) => {       
        const storedid = localStorage.getItem('data');
            if (storedid) {
        setIdconta(storedid);
        } 
        if ( (( saldo2 - valor) > 0) && ( valor != 0) ) {
            
            try { 
                const response = await axios.get('http://localhost:8000/Nome_transferencia', {
                  params: {
                  id_conta: storedid,
                  }
                })
                const nome = response.data
                setNome(nome);
                console.log(response) 
                } catch (error) {
                    console.error('Erro ao buscar dados:', error);
                }
            
            setShowParte2(true);
        } 
        else if (valor == 0) {
            alert("O valor precisa ser maior que 0")
        }
        // final do if
        else {
            alert("Valor indiponivel em sua conta")
        }
    };

    const handleClickAlterar = () => {
        setShowParte2(false);

    };

    const [exibirComprovante, setExibirComprovante] = useState(false);

    const handleConfirmarClick = async (e) => {
        setExibirComprovante(true);
        const storedid = localStorage.getItem('data');
            if (storedid) {
        setIdconta(storedid);
        } 
        try {  
            // transferencia conta corrente -> corrente
            if((selectedOption2 == 'option1') && (selectedOption == 'option1') ) {
            const response = await axios.get('http://localhost:8000/funcao_updates_corrente_corrente', {
                params: {
                valor: valor,
                id_conta1: storedid,
                id_conta: idtransferir,
                } 
            })
            // console.log(response)
            } 
             else if ((selectedOption2 == 'option2') && (selectedOption == 'option1')){
                const response = await axios.get('http://localhost:8000/funcao_updates_corrente_poupanca', {
                    params: {
                        valor: valor,
                        id_conta1: storedid,
                        id_conta: idtransferir,
                     }
                     
                })
               // console.log(response)
            } else if ((selectedOption2 == 'option1') && (selectedOption == 'option2')){
                const response = await axios.get('http://localhost:8000/funcao_updates_poupanca_corrente', {
                    params: {
                        valor: valor,
                        id_conta1: storedid,
                        id_conta: idtransferir,
                     }
                     
                })
                //console.log(response)
            } else if ((selectedOption2 == 'option2') && (selectedOption == 'option2')){
                const response = await axios.get('http://localhost:8000/funcao_updates_poupanca_poupanca', {
                    params: {
                        valor: valor,
                        id_conta1: storedid,
                        id_conta: idtransferir,
                     }
                     
                })
                //console.log(response)
            }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
    };

    const handleVoltarClick = () => {
        setExibirComprovante(false);
        setShowParte2(false);
    };

    const charCount = text.length;

    //para pegar os valores de conta corrente e poupaça do usuario

    const [selectedOption, setSelectedOption] = useState('option1');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        //console.log(event.target.value)
    };
    

    useEffect(() => {
        
        const storedid = localStorage.getItem('data');
        if (storedid) {
            setIdconta(storedid);
        }
        const fetchData = async () => {

            
            try {  if(selectedOption == 'option1') {
                const response = await axios.get('http://localhost:8000/SaldoContaCorrente', {
                  params: {
                  id_conta: storedid,
                  }
                })
                    //console.log(response)
                    const saldo = response.data
                    setData(saldo);
                    setSaldo2(response.data[0].saldo)
                } else if (selectedOption == 'option2'){
                    const response = await axios.get('http://localhost:8000/SaldoContaPoupanca', {
                  params: {
                  id_conta: storedid,
                  }
                })
                    //console.log(response)
                    const saldo = response.data
                    setData(saldo);
                    setSaldo2(response.data[0].saldo)
                }
                
                } catch (error) {
                    console.error('Erro ao buscar dados:', error);
                }
        }      
        fetchData();
      }, [selectedOption]);   

    return (
        <div className="tela-transfere">
            <h1>Transferir</h1>
            <div className="item-1">
                <div className="quadrado1">1</div>
                <div className="title-1">
                    <p>Complete os dados para a transferência</p>
                </div>
            </div>

            <div className="item-2">
                <div className="parte-input">

                    <div className="conta-origem">
                        <label htmlFor="Conta-origem">Conta de Origem</label>
                        <p id='conta-origem'>{idconta}</p>
                        
                    </div>

                    <div className="destinatario">
                        <label htmlFor="destinatario">Destinatário</label>
                        <input
                            id="destinatario"
                            type="text"
                            name="destinatario"
                            placeholder="N° Conta"
                            onChange={(e) => setIdtransferir(e.target.value) } 
                            maxLength={7}
                        />
                    </div>
                    <div className='opcao-conta' id='opcao-conta2'>
                        <label>
                            <input
                            type="radio"
                            value="option1"
                            name="Options"
                            checked={selectedOption2 === "option1"}
                            onChange={handleOptionChange2}
                            />
                            Conta corrente
                        </label>

                        <label>
                            <input
                            type="radio"
                            value="option2"
                            name="Options"
                            checked={selectedOption2 === "option2"}
                            onChange={handleOptionChange2}
                            />
                            Conta poupança
                        </label>
                    </div>  
                    <div className="valor">
                        <label htmlFor="valor">Valor</label>
                        <input
                            id="valor"
                            type="text"
                            name="valor"
                            placeholder="R$"
                            onChange={(e) => setValor(e.target.value)}
                        />
                    </div>

                    <div className="descricao">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea id="inputdesc" class="descricao" placeholder="Escreva sua mensagem" value={text} onChange={handleChange} maxLength={50} />

                        <span id="charCount">{charCount}/50</span>
                    </div>

                </div>
                <div className='container-detalhes-conta'>
                    <div className="detalhes-conta">
                        <p className="detalhes-conta-p">Detalhes da Conta</p>
                        <div className="componentes-detalhes-conta">
                            <p>Saldo disponível</p>
                            {(
                            data.map((data) => (
                            <div key={data.id}>
                            <p>R${data.saldo}</p>
                            </div>
                        ))
                        )} 
                        </div>
                    </div>
                    <div className='opcao-conta'>
                        <label>
                            <input
                            type="radio"
                            value="option1"
                            name="myOptions"
                            checked={selectedOption === "option1"}
                            onChange={handleOptionChange}
                            />
                            Conta corrente
                        </label>

                        <label>
                            <input
                            type="radio"
                            value="option2"
                            name="myOptions"
                            checked={selectedOption === "option2"}
                            onChange={handleOptionChange}
                            />
                            Conta poupança
                        </label>
                    </div>  
                </div>
            </div>

            <div className="btn-prox">
                <button id="btnProx" onClick={handleClick} >Próximo</button>
            </div>

            {showParte2 && (
                <div className="parte2-confimar">
                    <div className="item-1-confirmar">
                        <div className="quadrado1">2</div>
                        <div className="title-1">
                            <p>Confirme os dados</p>
                        </div>
                    </div>

                    <div className="dados-confirmar">
                        <div className="dados-transferencia">
                            <p className="p-title">Dados da Transferência</p>
                            <p className="p-body">Conta de origem: {idconta} </p>
                        </div>

                        <div className="dados">
                            <div className="dados-1">
                                <div>
                                <span>
                                    Nome Destinatário
                                </span>
                                </div>
                                <div className="span-destinatario">
                                <span className="span-destinatario">
                                {(
                                    nome.map((data) => (
                                    <div id='span-destinatario' key={data.id}>
                                    <p>{data.nome_cliente}</p>
                                    </div>
                                ))
                                )} 
                                </span>
                                </div>
                                <div>
                                <span>
                                    Conta Destinatário
                                </span>
                                </div>
                                <div>
                                <span className="span-destinatario">
                                {idtransferir}
                                </span>
                                </div>
                            </div>

                            <div className="dados-2">

                                <span>
                                    Banco
                                </span>

                                <span className="span-destinatario">
                                    Banco Estado
                                </span>

                                <span>
                                    Descrição
                                </span>

                                <span className="span-destinatario">
                                    {text}
                                </span>

                            </div>

                            <div className="dados-3">

                                <span>
                                    Valor
                                </span>

                                <span className="span-destinatario">
                                    R$ {valor}
                                </span>

                            </div>
                        </div>

                    </div>

                    <div className="botoes-voltar-confirmar">

                        <div className="btn-prox">
                            <button id="btnProx" onClick={handleClickAlterar} >Alterar</button>
                        </div>
                        <div className="btn-prox">
                            <button id="btnProx" onClick={handleConfirmarClick}  >Confirmar</button>
                        </div>


                    </div>






                </div>
            )}

            {exibirComprovante && (
                <div>
                    <button id='btnVoltarTransferir' onClick={handleVoltarClick} className="btnVoltar">Voltar</button>
                    <TelaComprovante />
                </div>
            )}




        </div>


    );
}

export default TelaTransferir;