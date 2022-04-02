import '../styles/HomePage.css';
import Tarjeta from '../componentes/Tarjeta';
import React, { useState, useEffect } from 'react';
import Header from '../componentes/Header';

function HomePage() {
    
    const [tarjetas, setTarjetas] = useState([]);

    useEffect(() => {
        const getTarjetas = () =>{
            fetch('http://localhost:9000/api/pelicula')
            .then(res => res.json())
            .then(res => setTarjetas(res))
        }
        getTarjetas()
    }, [])
    console.log(tarjetas);
    return (
        <div className="App">
            <Header/>
            <main className="App-main">
                {tarjetas.map((tarjeta) => (
                    <Tarjeta titulo = {tarjeta.nombre} duracion = {tarjeta.duracion} descripcion = {tarjeta.descripcion}/>     
                ))}
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
