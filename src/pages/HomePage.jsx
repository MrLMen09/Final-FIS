import '../App.css';
import Tarjeta from '../tarjeta/Tarjeta';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function HomePage() {
    return (
        <div className="App">
            <header className="App-header">
                <div id="h-principal">
                    <img
                        id="logo"
                        src="../media/logo.png"
                    />
                    <h1 id="titulo">Cine Jungla</h1>
                </div>
                <div id="botones-header">
                    <img src="../media/carritoBlanco.png" alt="" id="carrito" />
                    <img src="../media/personaIconoBlanco.png" alt="" id="usuario" />
                </div>
            </header>
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
