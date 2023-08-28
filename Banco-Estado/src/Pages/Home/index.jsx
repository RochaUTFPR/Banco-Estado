import './home.css';
import logo from '../img/bancoestado-logo.png'
import entrar from '../img/Frame.svg';
import imagemhome from './Imagens/Imagem-Home.svg';
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate()



  return (

    <div className="Home">
      <header className='header'></header>
      <div className='container-principal'>
        <div className='Container-superior'>
          <img className='logo' src={logo} />

          <div className='btnsEntrar'>
            <button id='EntrarCliente' onClick={() => { navigate('/login') }}  >
              <img className='home-login' src={entrar} alt="" />
              <p className='entrar'> Entrar Cliente </p>
            </button>

            <button id='EntrarServidor' onClick={() => { navigate('/Loginfuncionario') }}  >
              <img className='home-login' src={entrar} alt="" />
              <p className='entrar'> Entrar Servidor </p>
            </button>
          </div>


        </div>
        <div className='container-inferior'>
          <div >
            <p >Seu parceiro confiável para uma vida de proteção.</p>
          </div>
          <img className='imagem-home' src={imagemhome} alt="" />
        </div>
      </div>
      <footer className='footer'> © Projeto Banco de Dados 2 - 2023</footer>
    </div>
  );
}
export default Home;