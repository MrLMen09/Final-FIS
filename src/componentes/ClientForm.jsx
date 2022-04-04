import React from "react";
import { useState, useEffect } from "react";

import "./styles/ClientForm.css";

const ClientForm = (props) => {
  const movie = { titulo: props.titulo };
  const [funcion, setFuncion] = useState([]);

  useEffect(() => {
    console.log(movie);
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    };
    const getFuncion = () => {
      fetch("http://localhost:9000/api/funcion", requestInit)
        .then((res) => res.json())
        .then((res) => setFuncion(res));
    };
    getFuncion();
  }, []);

  const redirigir = () => {
    alert("Boletas compradas exitosamente");
    setTimeout(window.location.href = "/homepage", 2000)

  };
  return (
    <div className="form p-0 mt-5 form-container">
      {funcion.map((f) => (
        <div >
          <div className="form-group">
            <label htmlFor="">Pelicula</label>
            <input
              type="text"
              className="form-control"
              value={props.titulo}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Sala</label>
            <input type="text" className="form-control" value={f.codigoSala} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="">Duración</label>
            <input type="text" className="form-control" value={f.horainicial} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="">Cedula cliente</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Cantidad</label>
            <input type="number" className="form-control" />
          </div>

          <button className="mt-4 btn btn-primary" onClick={redirigir}>Confirmar</button>
        </div>
      ))}
    </div>
  );
};
export default ClientForm;
