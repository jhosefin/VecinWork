import React from "react";
import publi1 from "./img/publi1.jpg";
import publi2 from "./img/publi2.jpg";
import publi3 from "./img/publi3.jpg";
import publi4 from "./img/publi4.jpg";
import { Link } from "react-router-dom";

const Publicacion = () => {
  return (

    <body className="container" id="publicacion">

      <div className="container" id="galeriaPublicacion">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={publi1} id="imgpubli" className=" " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={publi2} id="imgpubli" className="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={publi3} id="imgpubli" className="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={publi4} id="imgpubli" className="d-block " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
     {/*  acá termina el carrusel */}

     <div className="container" id="encabezado">
     <h1 id="nombrepubli">Arturo Petrolino</h1>
     <h2>Reparación de lavadoras y refrigeradores</h2>
     </div>

     {/* acá termina el encabezado */}

     <div className="container" id="publicaciondatos">
     <table className="table table-borderless">
  <thead>
    
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ubicación</th>
      <td>Santiago, Chile</td>  
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
<div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        DESCRIPCIÓN DE ACTIVIDADES DEL SERVICIO
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">            
              Realizo reparación de diferentes tipos y marcas de artefactos
              eléctricos.<code> Experiencia de 10 años</code>, especialista en lavadoras y
              refrigeradores. Incluye garantía de 6 meses.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        CONDICIONES
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><ul>
        <li>El aparato debe estar ubicado en el lugar de armado y debe existir el espacio necesario para su correcto armado.</li>
        <li>Valor de servicio es válido solo para un aparato.</li>
        <li>Evite que niños y mascotas circulen en el entorno donde se realizará el trabajo.</li>
        <li>El servicio inicia en el rango horario contratado.</li>
        <li>Se recomienda que la persona que contrata el servicio esté en el domicilio durante la ejecución de éste o bien antes del término. Para que así pueda verificar la realización de las labores solicitadas.</li>
        <li>Se recomienda no dejar cosas de valor en el domicilio durante la ejecución del servicio.</li>
        </ul></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        EXCLUSIONES
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><ul>
        <li>No incluye modificaciones de productos, trabajos de electricidad ni gasfitería.</li>
        <li>No incluye retiro escombros, basura queda en sacos al interior del domicilio donde el cliente disponga.</li>
        </ul></div>
    </div>
  </div>
</div>
      
{/* acá terminan los datos */}
<div className="container" id="publicacionbotones">

                <Link classNameName="btn btn-primary" to="/Chat">
                Contactar
                </Link>
<a className="btn btn-primary" id="loquiero">Lo quiero</a>



</div>
    </body>
  )
}

export default Publicacion;

