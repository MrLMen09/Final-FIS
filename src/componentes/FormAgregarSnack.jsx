import React from 'react';
import './FormAgregarSnack.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes, useNavigate } from 'react-router-dom'

function Form({ snack, setSnack }) {

    const handleChange = e => {
        setSnack({
            ...snack,
            [e.target.name]: e.target.value
        })
    }

    let navigate = useNavigate();
    function handleClick() {
        navigate('/snacks')
    }

    let { codigoProducto, stock, nombre, descripcion, valoracion, Codigo } = snack

    const handleSubmit = () => {
        codigoProducto = parseInt(codigoProducto);
        stock = parseInt(stock);
        //validación de los datos
        if (codigoProducto < 0 || stock < 0 || nombre === '' || descripcion === '' || valoracion === '') {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(snack)
        }
        fetch('http://localhost:9000/api/snack', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        //reiniciando state de pelicula
        setSnack({
            codigoProducto: "",
            stock: "",
            nombre: "",
            descripcion: "",
            valoracion: "",
            Codigo: null
        })

        alert('Snack agregado correctamente')

    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <h1>AGREGAR SNACK</h1>
                </div>
                <div class="d-grid gap-2 peliculasButton">
                    <button className="btn btn-primary" onClick={handleClick}>Snacks</button>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputId" className="form-label">Codigo snack*</label>
                    <input name="codigoProducto" onChange={handleChange} type="text" className="form-control" id="InputId" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputStock" className="form-label">Stock*</label>
                    <input name="stock" onChange={handleChange} type="number" min="0" className="form-control" id="InputStock" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputNameP" className="form-label">Nombre snack*</label>
                    <input name="nombre" onChange={handleChange} type="text" className="form-control" id="InputNameP" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputDescripcionS" className="form-label">Descripcion*</label>
                    <input name="descripcion" onChange={handleChange} type="text" className="form-control" id="InputDescripcionS" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputValoracionS" className="form-label">Valoracion*</label>
                    <input name="valoracion" onChange={handleChange} type="text" className="form-control" id="InputValoracionS" required />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="InputCodS" className="form-label">Codigo</label>
                    <input name="Codigo" onChange={handleChange} type="number" defaultValue={null} className="form-control" id="InputCodS" />
                </div>
                <div className="form-text">Los campos con * son requeridos</div>
                <div class="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Agregar Snack</button>
                </div>
            </form>
        </div>
    );
}

export default Form;