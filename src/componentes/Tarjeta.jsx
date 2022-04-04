import React from "react";
import "./Tarjeta.css";
import ClientForm from "./ClientForm";
import Ticket from "./Ticket";

function Tarjeta(props) {
  const [add, setAdd] = React.useState(false);
  const handleClick = () => {
    setAdd(true);
  };
  if (!add) {
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
            <button
              id="comprar"
              className="botonesTarjeta"
              onClick={handleClick}
            >
              Comprar Ahora
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid">
      <div className="row compra-container">
        <div className="col mt-5">
          <Ticket titulo={props.titulo}/>
        </div>
        <div className="col">
          <ClientForm titulo={props.titulo} />
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;
