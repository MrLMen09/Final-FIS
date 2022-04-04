import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import './Header.css';


function Header() {
    return (
        <header className="App-header">
            <div id="h-principal">
                <img
                    id="logo"
                    src="../media/logo.png"
                />
                <NavLink to="/" className="linkTitulo"><h1 className="titulo">Cine Jungla</h1></NavLink>
            </div>
            <div id="botones-header">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/reportes">Reportes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/agregarpelicula">Agregar Pelicula</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/agregarsnack">Agregar Snack</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <img src="../media/carritoBlanco.png" alt="" id="carrito" />
                <img src="../media/personaIconoBlanco.png" alt="" id="usuario" />
            </div>
        </header>
    );
}

export default Header;
