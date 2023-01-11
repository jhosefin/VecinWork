import React from "react";
import "./css/style.css";
import perfil from "./img/perfil.png";
import solicita from "./img/solicita.png";
import contactate from "./img/contactate.png";
import evalua from "./img/evalua.png";
import Group9 from "./img/Group9.png";
import Group10 from "./img/Group10.png";

const PrincipalComponent = () => {
  return (
    <div className="container-xxs">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Group10} className="d-block w-100 " alt="banner1"></img>
          </div>
          <div className="carousel-item">
            <img src={Group9} className="d-block w-100" alt="banner2"></img>
          </div>
          <div className="carousel-item">
            <img src={Group9} className="d-block w-100" alt="banner3"></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br   />
      <div className="container-sm">
        <h3>Encuentra en tu comunidad o alrededores lo que necesites</h3>
        <h2 style={{color:'#F19F23'}}>Fácil y Rápido.</h2>
      </div>
      <br />
      <div className="tarjetas">
        <br />
      <div className="card row align-items-start" style={{width: '18rem'}}>
  <img src={perfil} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <p className="card-text">Crear perfil.</p>
  </div>
</div>
<div className="card row align-items-center" style={{width: '18rem'}}>
  <img src={solicita} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <p className="card-text">Solicita o publica.</p>
  </div>
</div>
<div className="card row align-items-center" style={{width: '18rem'}}>
  <img src={contactate} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <p className="card-text">Contactate.</p>
  </div>
</div>
<div className="card row align-items-center" style={{width: '18rem'}}>
  <img src={evalua} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <p className="card-text">Evalua.</p>
  </div>
</div>
<br />
</div>
    </div>
  );
};

export default PrincipalComponent;
