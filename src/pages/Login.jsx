import React, { useEffect, useState } from "react";
import fondo from "../media/fondo.svg";
import "../styles/Login.css";

const Login = () => {
  const redirigir = () => {
    window.location.href = "/Home";
  };

  const [user, setUser] = useState({
    cc: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    fetch("http://localhost:9000/api/login", requestInit)
      .then((res) => {
        const estado = res.status;
        if (estado === 200) redirigir()
        if (estado === 404) alert("Usuario no encontrado");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col">
          <img src={fondo} alt="Login image" className="bk-img" />
        </div>

        <div className="col d-flex align-items-center lg-container">
          <div className="row justify-content-lg-center">
            <h2 className="text-center">Bienvenido</h2>
            <div className="col-lg-7 mt-5">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="Nombre de usuario"
                name="cc"
                value={user.cc}
              />
            </div>
            <div className="col-lg-7 mt-5">
              <input
                onChange={handleChange}
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="telefono"
                value={user.telefono}
              />
            </div>
            <div className="col-lg-7 mt-5 text-center">
              <button
                type="submit"
                class="btn btn-lg btn-primary"
                onClick={onSubmit}
              >
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
