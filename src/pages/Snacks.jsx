import '../styles/Snacks.css';
import React, { useState, useEffect } from 'react';
import Tarjeta from '../componentes/Tarjeta';
import CHeader from '../componentes/Header.jsx';
import AppNav from '../componentes/AppNav';
import { BrowserRouter as Router, NavLink, Route, Routes, useNavigate } from 'react-router-dom'

function Snacks() {

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

    let navigate = useNavigate();
    function handleClick() {
        navigate('/agregarpelicula')
    }

    const [tarjetas, setTarjetas] = useState([]);

    useEffect(() => {
        const getTarjetas = () => {
            fetch('http://localhost:9000/api/snack')
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
                    <Tarjeta titulo = {tarjeta.nombre} duracion = {tarjeta.duracion} descripcion = {tarjeta.descripcion} codProd = {tarjeta.Codigo}/>     
                ))}
            </main>
            <AppNav pages={initialStateNav} />
            <footer className="App-footer">

            </footer>
        </div>
    );
}

export default Snacks;
