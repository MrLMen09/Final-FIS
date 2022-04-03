import React from 'react';
import './FormAgregarPelicula.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes, useNavigate } from 'react-router-dom'

function Form({ pelicula, setPelicula }) {

    const handleChange = e => {
        setPelicula({
            ...pelicula,
            [e.target.name]: e.target.value
        })
    }

    let navigate = useNavigate();
    function handleClick() {
        navigate('/peliculas')
    }

    let { nombre, duracion, idPelicula, valoraciones, descripcion, codigoFuncion } = pelicula

    const handleSubmit = () => {
        valoraciones = parseFloat(valoraciones);
        //validación de los datos
        if (idPelicula === '' || nombre === '' || duracion === '' || descripcion === '' || valoraciones <= 0) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pelicula)
        }
        fetch('http://localhost:9000/api/pelicula', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        //reiniciando state de pelicula
        setPelicula({
            nombre: "",
            duracion: "",
            idPelicula: "",
            valoraciones: 0,
            descripcion: "",
            codigoFuncion: null
        })

        alert('Pelicula agregada correctamente')

    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="titleAgregarP">
                    <h1>AGREGAR PELICULA</h1>
                </div>
                <div class="d-grid gap-2 peliculasButton">
                    <button className="btn btn-primary" onClick={handleClick}>Peliculas</button>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputId" className="form-label">Id pelicula*</label>
                    <input name="idPelicula" onChange={handleChange} type="text" className="form-control" id="InputId" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputNameP" className="form-label">Nombre pelicula*</label>
                    <input name="nombre" onChange={handleChange} type="text" className="form-control" id="InputNameP" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputDuracionP" className="form-label">Duracion*</label>
                    <input name="duracion" onChange={handleChange} type="text" className="form-control" id="InputDuracionP" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputValoracionP" className="form-label">Valoracion*</label>
                    <input name="valoraciones" onChange={handleChange} type="number" step="0.1" min="0" className="form-control" id="InputValoracionP" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputDescripcionP" className="form-label">Descripcion*</label>
                    <input name="descripcion" onChange={handleChange} type="text" className="form-control" id="InputDescripcionP" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputCodFuncionP" className="form-label">Codigo Funcion</label>
                    <input name="codigoFuncion" onChange={handleChange} type="number" defaultValue={null} className="form-control" id="InputCodFuncionP" />
                </div>
                <div className="form-text">Los campos con * son requeridos</div>
                <div class="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Agregar Pelicula</button>
                </div>


            </form>
        </div>
    );
}

export default Form;