import '../styles/HomePage.css';
import Tarjeta from '../componentes/Tarjeta';
import CHeader from '../componentes/Header.jsx';

function HomePage() {
    return (
        <div className="App">
            <CHeader/>
            <main className="App-main">
                <Tarjeta></Tarjeta>
            </main>
            <nav className="App-nav">
                <p className='menu' id="peliculas">Peliculas</p>
                <p className='menu' id="peliculas">Snacks</p>
            </nav>
            <footer className="App-footer">

            </footer>
        </div>
    );
}

export default HomePage;
