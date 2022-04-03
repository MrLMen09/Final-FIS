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

    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        const getSnacks = () => {
            fetch('http://localhost:9000/api/snack')
                .then(res => res.json())
                .then(res => setSnacks(res))
        }
        getSnacks()
    }, [])

    return (
        <div className="App">
            <CHeader />
            <main className="App-main">
                {snacks.map((snack) => (
                    <div className="contCards">
                        <Tarjeta titulo={snack.nombre} descripcion={snack.descripcion} />
                    </div>

                ))}
            </main >
            <AppNav pages={initialStateNav} />
            <footer className="App-footer">

            </footer>
        </div >
    );
}

export default Snacks;
