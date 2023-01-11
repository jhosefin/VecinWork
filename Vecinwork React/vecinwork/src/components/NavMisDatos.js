

import React from "react";
import './css/style.css'

const NavMisDatos = () => {
    return (

        <div className="container mt-md-5 row" id="containerNavMisDatos">
           
            <div className="btn-group-vertical col-3 border-end" role="group" aria-label="Vertical button group">
                <button type="button" className="btn btn-white text-start">Mis datos</button>
                <button type="button" className="btn btn-white text-start">Contraseña</button>
                <button type="button" className="btn btn-white text-start">Direcciones</button>
                <button type="button" className="btn btn-white text-start">Mis servicios</button>
                <button type="button" className="btn btn-white text-start">Mis publicaciones</button>
                <button type="button" className="btn btn-white text-start">Mis favoritos</button>
                <button type="button" className="btn btn-white text-start">Eliminar cuenta</button>
            </div>
    
        </div>


    );
};

export default NavMisDatos;