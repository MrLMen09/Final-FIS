import React from 'react';
import ReactDOM from 'react-dom';
import './Tarjeta.css';
import Image from 'react-bootstrap/Image';

function Tarjeta()
{
    
    return(
        <div id = "contenedorTarjeta">
            <div id = "atras">

            </div>
            <div id = "adelante">
                <div id = "imagen">
                    <img src="../media/producto.png" alt="" id = "imagen-tarjeta"/>
                </div>
                <hr />
                <div id = "info">
                    <h3>Producto</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <hr style={{color: "greenyellow"}}/>
                <div id = "botones">
                    <button id = "agregar" className='botonesTarjeta'>Agregar al Carrito</button>
                    <button id = "comprar" className='botonesTarjeta'>Comprar Ahora</button>
                </div>
                
            </div>
        </div>    
    );

}

export default Tarjeta;