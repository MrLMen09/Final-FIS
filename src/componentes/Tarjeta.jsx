import React from 'react';
import './Tarjeta.css';

function Tarjeta() {

    return (
        <div className="contenedorTarjeta">
            <div id="adelante">
                <img src="../media/producto.png" alt="" id="imagen-tarjeta" />
                <hr />
                <h3>Producto</h3>
            </div>

            <div id="atras">
                <div id="info">
                    <h3>Producto</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <hr style={{ color: "greenyellow" }} />
                <div id="botones">
                    <button id="agregar" className='botonesTarjeta'>Agregar al Carrito</button>
                    <br />
                    <button id="comprar" className='botonesTarjeta'>Comprar Ahora</button>
                    {/*<div className="row">
                        <div className="col-lg-4 info1">
                            <button type="button" className="btn btn-dark quantity">-</button>
                        </div>
                        <div className="col-lg-4 info2">
                            <input type="text" className='i_quantity' min="0" defaultValue="0" disabled />
                        </div>
                        <div className="col-lg-4 info3">
                            <button type="button" className="btn btn-dark quantity" >+</button>
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
    );

}

export default Tarjeta;