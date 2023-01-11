import React from "react";
import "./css/style.css";
import Group12 from "./img/Group12.png";
import logovecin from "./img/logovecin.png";
import chile from "./img/chile.png";

const FooterComponent = () => {
  return (
    <div className="container-fluid" id="footer">
    
      <div>
        <br></br>
        <img src={Group12} className="card-img-top" alt="..."></img>
      </div>
      <div className="logovecin">
        <br></br>
        <img src={logovecin} className="card-img-top" alt="..."></img>
      </div>
      <div>
        <h6>Servicios</h6>
        <ul>
            <li><small>Mi cuenta</small></li>
            <li><small>Contacto</small></li>
            <li><small>Preguntas frecuentes</small></li>
        </ul>
        </div>

        <div>
        <h6>Corporativo</h6>
        <ul>
            <li><small>¿Quienes Somos?</small></li>
            <li><small>Terminos y condiciones</small></li>
            <li><small>Política de privacidad</small></li>
        </ul>
        </div>
        <div>
            <h6>Estamos presentes en:            </h6>
            <br></br>
        <img src={chile} className="imgChile" alt="..."></img>
        <br></br>
      </div>
      <i className="bi-github" role="img" aria-label="GitHub"></i>
    </div>

  );
};

export default FooterComponent;
