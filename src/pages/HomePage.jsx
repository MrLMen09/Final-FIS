import '../styles/HomePage.css';
import React from 'react';
import Tarjeta from '../componentes/Tarjeta';
import AppNav from '../componentes/AppNav';
import CHeader from '../componentes/Header.jsx';
import { useState } from 'react';
import { useEffect } from 'react';

function HomePage() {
    const initialStateNav = [
        {
            id: "peliculas",
            nombre: "Peliculas",
            url: "/peliculas"
        },
        {
            id: "snacks",
            nombre: "Snacks",
            url: "/snacks"
        }
    ]
    const [tarjetas, setTarjetas] = useState([]);

    useEffect(() => {
        const getTarjetas = () =>{
            fetch('http://localhost:9000/api/pelicula')
            .then(res => res.json())
            .then(res => setTarjetas(res))
        }
        getTarjetas()
    }, [])

    return (
        <div className="App">
            <CHeader />
            <main className="App-main">
                {tarjetas.map((tarjeta) => (
                    <Tarjeta titulo = {tarjeta.nombre} duracion = {tarjeta.duracion} descripcion = {tarjeta.descripcion}/>     
                ))}
            </main>
            <AppNav pages={initialStateNav}/>
            <footer className="App-footer">

            </footer>
        </div>
    );
}

export default HomePage;
