import React from "react";
import naturaleza from "./img/naturaleza.jpg";
import leon from "./img/leon.jpg";
import carro from "./img/carro.jpg";
import "./css/style.css";

const PrincipalComponent = () => {
  return (
    <div class="container">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={naturaleza} class="d-block w-100" alt="naturaleza"></img>
          </div>
          <div class="carousel-item">
            <img src={carro} class="d-block w-100" alt="carro"></img>
          </div>
          <div class="carousel-item">
            <img src={leon} class="d-block w-100" alt="leon"></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="tarjetas">
      <div class="card row align-items-start" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Crear perfil.</p>
  </div>
</div>
<div class="card row align-items-center" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Solicita o publica.</p>
  </div>
</div>
<div class="card row align-items-center" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card row align-items-center" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
    </div>
  );
};

export default PrincipalComponent;
