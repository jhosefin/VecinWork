import React from "react";
import "./css/style.css";
import Group12 from "./img/Group12.png";

const NavbarComponent = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bd-navbar sticky-top ">
      <div id="BotonesNabvar" class=" container-xxl">
        <div>
        <button type="button" class="btn "><div class="letra">Santiago</div></button>
        </div>
        <div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servicios
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Construccion
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Jardineria
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Eventos
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Cuidado de personas
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Carpinteria
                  </a>
                </li>
              </ul>
            </li>
            </ul>
            </div>

            <div>
            <form
              id="service-search-form"
              class="hidden-xs hidden-sm hidden-md"
            >
              <div id="search" class="search-container input-group mb-3">
                <input
                  id="desktop-input"
                  class="form-control desktop-input"
                  autoComplete="off"
                  placeholder="Encuentra el servicio que necesitas aquí"
                  aria-describedby="button-addon2"
                />

                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Buscar
                  </button>
                </div>
            </form>
            </div>
            <div>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Consulta
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inicia sesión/Regístrate
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Mi cuenta
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Registro
                  </a>
                </li>
                </ul>

              </li>
              <li><a class="navbar-brand" href="#">
                <img src={Group12} alt="Logo"  class="d-inline-block align-text-top"/>
              </a></li>
              </ul>
              </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
