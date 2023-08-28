import React from "react";
import './TelaEmprestimo.css';

const TelaEmprestimos = () => {
    return (
        <div className="tela-emprestimo">
            <div className="emprestimo-container-superior">
                <div className="emprestimo-container-superior-1">
                    <p>1</p>
                </div>
                <div className="emprestimo-container-superior-titulo" > 
                    <p >Preencha os campos para o empréstimo</p>
                </div>
            </div>
            <div className="emprestimo-container-1">
                <div className="emprestimo-container">
                    <div className="emprestimo-container-interior">
                        <div>
                            <div className="emprestimo-container-interior-conta" >
                                <h1>Conta de origem</h1>
                                <p>Cuenta corriente 00-023-03687-07</p>
                            </div>
                                <div className="emprestimo-container-interior-divisao" ></div>
                                <div className="emprestimo-container-interior-emprestimo">
                                    <label htmlFor="Conta-origem">Tipo de Empréstimo</label>
                                    <input
                                    id="tipo-de-emprestimo"
                                    type="text"
                                    name="tipo-de-emprestimo"
                                    placeholder="Busca por nome ou conta"
                                    />   
                                </div>
                                <div className="emprestimo-container-interior-divisao" ></div>
                                <div className="emprestimo-container-interior-conta" >
                                    <h1>Valor</h1>
                                    <input
                                    id="valor-de-emprestimo"
                                    type="text"
                                    name="valor-de-emprestimo"
                                    placeholder="Valor do emprestimo"
                                    />   
                                </div>
                                <div className="emprestimo-container-interior-divisao" ></div>
                                <div className="emprestimo-container-interior-conta" >
                                <h1>Parcelas</h1>
                                <label htmlFor="Conta-origem">Parcelas XXXXXX</label>
                                </div>
                                <div className="emprestimo-container-interior-divisao" ></div>
                                <div className="emprestimo-container-interior-Data">
                                    <div className="emprestimo-container-interior-Data-inicio">
                                    <h1>Data inicio</h1>
                                    <div className="emprestimo-container-interior-Data-1"><label htmlFor="Conta-origem">XX / XX/ XXXX</label></div>
                                    </div>
                                    <div className="emprestimo-container-interior-Data-inicio">
                                    <h1>Data vencimento</h1>
                                    <div className="emprestimo-container-interior-Data-1"><label htmlFor="Conta-origem">XX / XX/ XXXX</label></div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div  className="emprestimo-container-lateral-1">
                        <div className="emprestimo-container-lateral" >
                            <h2>Detalhes da conta</h2>
                            <div className="emprestimo-container-lateral-div">
                            <h1>Saldo disponível</h1>
                            <h1>$ 145.470</h1>
                            </div>
                            <div className="emprestimo-container-lateral-div">
                            <h1>Linha de Crédito</h1>
                            <h1>$ 145.470</h1>
                            </div>
                            <div className="emprestimo-container-lateral-div">
                            <h1>Total disponível</h1>
                            <h1>$ 145.470</h1>
                            </div>
                        </div>
                        <div className="emprestimo-container-lateral-taxa">
                            <h3>Taxa de Juros</h3>
                            <h3>X Juros</h3>
                            <div className="emprestimo-container-interior-divisao-taxa"></div>
                        </div>
                    </div>
                </div>
                <div className="emprestimo-container-button">
                <button id="emprestimo-container-button-voltar">Voltar</button>
                <button id="emprestimo-container-button-solicitar">Solicitar</button>
                </div>
            </div>
        </div>
            
    )
}

export default TelaEmprestimos;