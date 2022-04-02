import '../styles/HomePage.css';
import React from 'react';
import AppNav from '../componentes/AppNav';
import CHeader from '../componentes/Header.jsx';

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

    return (
        <div className="App">
            <CHeader />
            <main className="App-main">
                <div className="title">
                    <h1 className="titleH1">Bienvenido a CineJungla!</h1>
                </div>
            </main>
            <AppNav pages={initialStateNav}/>
            <footer className="App-footer">

            </footer>
        </div>
    );
}

export default HomePage;
