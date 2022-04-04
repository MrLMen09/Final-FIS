import '../styles/MenuAbastecerBD.css';
import Tarjeta from '../componentes/Tarjeta';
import AppNav from '../componentes/AppNav';
import CHeader from '../componentes/Header.jsx';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes, useNavigate } from 'react-router-dom'

function AbastecerBD() {
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
    function handleClickAgregarP() {
        navigate('/agregarpelicula')
    }
    function handleClickAgregarS() {
        navigate('/agregarsnack')
    }

    return (
        <div className="App">
            <CHeader />
            <main className="App-main">
                <div className="container">
                    <div className="titleMenuAbastecerBD">
                        <h1>MENU ABASTECER BASE DE DATOS</h1>
                    </div>
                    <div className="">
                        <p>Elige una opción</p>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" onClick={handleClickAgregarP}>Agregar Pelicula</button>
                        <button className="btn btn-primary" onClick={handleClickAgregarS}>Agregar Snack</button>
                    </div>
                </div>
            </main>
            <AppNav pages={initialStateNav} />
            <footer className="App-footer">

            </footer>
        </div>
    );
}

export default AbastecerBD;
