import React from "react";
import "./css/style.css";
import electricista from "./img/electricista.jpg";
import plomero from "./img/plomero.jpg";
import cuidado from "./img/cuidado.jpg";
import publi1 from "./img/publi1.jpg";
import publi2 from "./img/publi2.jpg";
import publi3 from "./img/publi3.jpg";
import publi4 from "./img/publi4.jpg";

const ChatComponent = () => {
  return (
    <div id="contenedorChat" className="container-xxl">
      <div className="container-xl">
      <h1>Arturo Petrolino</h1>
      <h2>Reparación de lavadora</h2>

      <div className="container" id="galeriaPublicacion2">
      <div className="carousel slide" data-bs-ride="carousel">
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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Ubicación</th>
            <th scope="col">Precio</th>
            <th scope="col">Disponibilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Santiago, Chile</td>
            <td>$50.000</td>
            <td>Lunes a viernes de 09:00 a 19:00</td>
          </tr>
        </tbody>
      </table>
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
      
      <button type="button" className="botonSolicita btn "><div className="letra2">Quiero Este Servicio</div></button>
      <div className="position-absolute top-50 start-50">
        <h2>Envia tu mensaje</h2>
      <textarea id="chatear" placeholder="Hola Ingresa tu mensaje">
      </textarea>
      <br></br>
      <div id="liveAlertPlaceholder"></div>
<button type="button" className="btn btn-primary" id="liveAlertBtn">Enviar</button>
{/*       <button type="submit" className="botonEnviar btn"><div className="letra">Enviar</div></button> */}
      </div>
<br></br>
<div className="interesar">
  <br></br>
      <h3> Te podria interesar</h3>
      <br></br>
      <div className="tarjeta">
      <div className="card row align-items-start" style={{width: '18rem'}}>
      <img src={electricista} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">Electricista.</p>
      </div>
      </div>
      <div className="card row align-items-start" style={{width: '18rem'}}>
      <img src={plomero} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">Plomero.</p>
      </div>
      </div>
      <div className="card row align-items-start" style={{width: '18rem'}}>
      <img src={cuidado} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">Cuidado de Adultos.</p>
      </div>
      </div>
      </div>
      </div>
    </div>
    <br></br>
    </div>
    
  );
};

export default ChatComponent;
