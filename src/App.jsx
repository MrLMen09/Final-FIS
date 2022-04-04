import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Peliculas from './pages/Peliculas';
import AgregarPelicula from './pages/AgregarPelicula';
import Snacks from './pages/Snacks';
import AgregarSnack from './pages/AgregarSnack';
import Reportes from './pages/Reportes';
import SalaCine from './pages/SalaCine';
<<<<<<< Updated upstream
import AbastecerBD from './pages/MenuAbastecerBD';
=======
import Login from './pages/Login';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path='/peliculas' element={<Peliculas/>}/>
        <Route path='/snacks' element={<Snacks/>}/>
        <Route path='/abastecerbd' element={<AbastecerBD/>}/>
        <Route path='/agregarpelicula' element={<AgregarPelicula/>}/>
        <Route path='/snacks' element={<Snacks/>}/>
        <Route path='/agregarsnack' element={<AgregarSnack/>}/>
        <Route path='/reportes' element={<Reportes/>}/>
        <Route path='/compracine' element={<SalaCine/>}/>
      </Routes>
    </Router>
  );
}

export default App;
