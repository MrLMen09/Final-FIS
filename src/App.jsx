import logo from './logo.svg';
import Tarjeta from './componentes/Tarjeta';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Reportes from './pages/Reportes';
import SalaCine from './pages/SalaCine';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/reportes' element={<Reportes/>}/>
        <Route path='/compracine' element={<SalaCine/>}/>
      </Routes>
    </Router>
  );
}

export default App;
