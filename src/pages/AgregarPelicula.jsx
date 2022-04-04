import '../styles/HomePage.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Form from '../componentes/FormAgregarPelicula';


function AgregarPelicula() {
    const [pelicula, setPelicula] = useState({
        nombre: "",
        duracion: "",
        idPelicula: "",
        valoraciones: 0,
        descripcion: "",
        codigoFuncion: null
    })

    return (
        <div>
            <Form pelicula={pelicula} setPelicula={setPelicula}/>
        </div>
        
    );
}

export default AgregarPelicula;
