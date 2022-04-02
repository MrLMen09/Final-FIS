import React from 'react';
import './Tarjeta.css';

function Tarjeta(props) {

    const tarjetas = props.tarjetasP;

    return (
        <div>
            {tarjetas.map((tarjeta) => (
                <div key={tarjeta.idPelicula} id="contenedorTarjeta">
                    <div id="atras">
                    </div>
                    <div id="adelante">
                        <div id="imagen">
                            <img src="../media/producto.png" alt="" id="imagen-tarjeta" />
                        </div>
                        <hr />
                        <div id="info">
                            <h3>{tarjeta.nombre}</h3>
                            <p>{tarjeta.descripcion}</p>
                        </div>
                        <hr style={{ color: "greenyellow" }} />
                        <div id="botones">
                            <button id="agregar" className='botonesTarjeta'>Agregar al Carrito</button>
                            <button id="comprar" className='botonesTarjeta'>Comprar Ahora</button>
                            <div className="row">
                                <div className="col-lg-4 info1">
                                    <button type="button" className="btn btn-dark quantity">-</button>
                                </div>
                                <div className="col-lg-4 info2">
                                    <input type="text" className='i_quantity' min="0" defaultValue="0" disabled />
                                </div>
                                <div className="col-lg-4 info3">
                                    <button type="button" className="btn btn-dark quantity" >+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default Tarjeta;