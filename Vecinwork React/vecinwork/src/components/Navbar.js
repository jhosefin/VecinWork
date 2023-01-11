import React from "react";
import "./css/style.css";
import Group12 from "./img/Group12.png";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (

    <div className="background">
      <div className="new header col-md-10 position-left">
      <nav className="navbar navbar-expand-lg navbar-dark bd-navbar sticky-top ">

      <div id="BotonesNabvar" className=" container-sm">
      <div>
              <Link type="button" className="btn" to="/Ubicacion">
                <div className="letra">Santiago</div>
              </Link>
            </div>
        <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item">
                    Construccion
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    Jardineria
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" >
                    Eventos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" >
                    Cuidado de personas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" >
                    Carpinteria
                  </a>
                </li>
                <li>
                <Link className="dropdown-item" to="/Publicacion">
                    Electrónico
                    <div id="lavadora">
                    Lavadoras
                </div>
                  </Link>
                </li>
              </ul>
            </li>
            </ul>
            </div>

            <div>
            <form
              id="service-search-form"
              className="hidden-xs hidden-sm hidden-md"
            >
              <div id="search" className="search-container input-group mb-3">
                <input
                  id="desktop-input"
                  className="form-control desktop-input"
                  autoComplete="off"
                  placeholder="Encuentra el servicio que necesitas aquí"
                  aria-describedby="button-addon2"
                />

                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Buscar
                  </button>
                </div>
            </form>
            </div>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to="/Conocenos">
            Conocenos
                </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inicia sesión/Regístrate
              </a>
              <ul className="dropdown-menu">
                <li>
                <Link className="dropdown-item" to="/Iniciar-Sesion">
                    Mi cuenta
                </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Registro">
                    Registro
                    </Link>
                </li>
                </ul>
                </li>
                </ul>
              </div>
              </div>
              </nav>
              </div>
              <div className="logo col-md-2 position-right" id="containerLogo">
                <Link className="navbar-brand" to="/">
                <img src={Group12} alt="Logo" className="d-inline-block align-text-top"/>
                  </Link>
                </div>

    </div>
  ); 
};

export default NavbarComponent;
