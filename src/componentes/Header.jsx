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
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/reportes">Reportes</NavLink>
                <img src="../media/carritoBlanco.png" alt="" id="carrito" />
                <img src="../media/personaIconoBlanco.png" alt="" id="usuario" />
                {/*<nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>*/}
            </div>
        </header>
    );
}

export default Header;
