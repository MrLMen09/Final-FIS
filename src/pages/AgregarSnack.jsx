import '../styles/HomePage.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Form from '../componentes/FormAgregarSnack';


function AgregarSnack() {
    const [snack, setSnack] = useState({
        codigoProducto: "",
        stock: "",
        nombre: "",
        descripcion: "",
        valoracion: "",
        Codigo: null
    })

    return (
        <div>
            <Form snack={snack} setSnack={setSnack}/>
        </div>
    );
}

export default AgregarSnack;
