import '../styles/HomePage.css';
import Footer from '../componentes/Footer';
import Tarjeta from '../componentes/Tarjeta';
import AppNav from '../componentes/AppNav';
import CHeader from '../componentes/Header.jsx';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes, useNavigate } from 'react-router-dom'

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
        const getTarjetas = () => {
            fetch('http://localhost:9000/api/pelicula')
                .then(res => res.json())
                .then(res => setTarjetas(res))
        }
        getTarjetas()
    }, [])

    let navigate = useNavigate();
    function handleClickComprar() {
        navigate('/peliculas')
    }
    function handleClickAbastecer() {
        navigate('/abastecerbd')
    }

    return (
        <div className="App">
            <CHeader />
            <main className="App-main">
                <div className="container">
                    <div className="titleMenu">
                        <h1>MENU PRINCIPAL</h1>
                    </div>
                    <div className="">
                        <p>Elige una opción</p>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" onClick={handleClickComprar}>Comprar</button>
                        <button className="btn btn-primary" onClick={handleClickAbastecer}>Abastecer BD</button>
                        <button className="btn btn-primary" >Cambiar Rol</button>
                        <button className="btn btn-primary" >Evalúar productos/servicios</button>
                    </div>
                </div>
            </main>
            <AppNav pages={initialStateNav} />
            <footer className='App-footer'>
                <Footer/>
            </footer>
            
        </div>
    );
}

export default HomePage;
