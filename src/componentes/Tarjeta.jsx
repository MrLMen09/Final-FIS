import React from 'react';
import './Tarjeta.css';

function Tarjeta(props) {


    return (
        <div className="contenedorTarjeta">
            <div id="adelante">
                <img src="../media/producto.png" alt="" id="imagen-tarjeta" />
                <hr />
                <h3>{props.titulo}</h3>
            </div>

            <div id="atras">
                <div id="info">
                    <h3>{props.titulo}</h3>
                    <hr />
                    <p>{props.duracion}</p>
                    <p>{props.descripcion}</p>
                </div>
                <hr style={{ color: "greenyellow" }} />
                <div id="botones">
                    <button id="comprar" className='botonesTarjeta'>Comprar Ahora</button>
                </div>
            </div>
        </div>
    );

}

export default Tarjeta;