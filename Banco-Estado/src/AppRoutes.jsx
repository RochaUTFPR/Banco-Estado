import {
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import EntradaCliente from './Pages/EntradaCliente';
import TelaResumo from './Pages/TelaResumo';
import TelaMovimentos from './Pages/TelaMovimentos';
import EntradaFuncionario from './Pages/EntradaFuncionario';
import LoginFuncionario from './Pages/LoginFuncionario';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path='/Sistema' element = { <EntradaCliente />} />
            <Route exact path='/movimentos' element = { <TelaMovimentos />} />
            <Route exact path='/Loginfuncionario' element = { <LoginFuncionario />} />
            <Route exact path='/SystemFuncionario' element = { <EntradaFuncionario />} />
        </Routes>
    );
};
export default AppRoutes;