import logo from './logo.svg';
import Tarjeta from './tarjeta/Tarjeta';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Reportes from './pages/Reportes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/reportes' element={<Reportes/>}/>
      </Routes>
    </Router>
  );
}

export default App;
