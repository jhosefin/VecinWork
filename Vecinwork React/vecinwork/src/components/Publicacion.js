import React from "react";
import publi1 from "./img/publi1.jpg";
import publi2 from "./img/publi2.jpg";
import publi3 from "./img/publi3.jpg";
import publi4 from "./img/publi4.jpg";

const Publicacion = () => {
  return (

    <body class="container" id="publicacion">

      <div class="container" id="galeriaPublicacion">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={publi1} id="imgpubli" class=" " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={publi2} id="imgpubli" class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={publi3} id="imgpubli" class="d-block " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={publi4} id="imgpubli" class="d-block " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
     {/*  acá termina el carrusel */}

     <div class="container" id="encabezado">
     <h5 id="nombrepubli">José José</h5>
     <h4>Reparación de lavadoras y refrigeradores</h4>
     </div>

     {/* acá termina el encabezado */}

     <div class="container" id="publicaciondatos">
     <table class="table table-borderless">
  <thead>
    
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ubicación</th>
      <td>Santiago, Chile</td>  
    </tr>
    <tr>
      <th scope="row">Descripción</th>
      <td>Realizo reparaciones de diferentes tipos y marcas de artefactos eléctricos.<br/>
        Experiencia de 10 años, especialista en lavadoras y refrigeradores.<br/>
        Incluye garantía de 6 meses.</td>  
    </tr>
    <tr>
      <th scope="row">Precio</th>
      <td>$50.000</td>  
    </tr>
    <tr>
      <th scope="row">Disponibilidad</th>
      <td>Lunes a viernes de 09:00 a 19:00</td>  
    </tr>
   
    
  </tbody>
</table>
</div>
{/* acá terminan los datos */}
<div class="container" id="publicacionbotones">
<a href="#" class="btn btn-primary" id="contactar">Contactar</a>
<a href="#" class="btn btn-primary" id="loquiero">Lo quiero</a>



</div>
    </body>
  )
}

export default Publicacion;

