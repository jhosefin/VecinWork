import React from "react";
import "./css/style.css";
import lavadora from "./img/lavadora.png";
import electricista from "./img/electricista.jpg";
import plomero from "./img/plomero.jpg";
import cuidado from "./img/cuidado.jpg";

const ChatComponent = () => {
  return (
    <div id="contenedorChat" class="container-xxl">
      <div class="container-xl">
      <h1>Jose Ramirez</h1>
      <h2>Reparación de lavadora</h2>
      <img src={lavadora} alt="---" class=" imagenChat " />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Dirección</th>
            <th scope="col">Precio</th>
            <th scope="col">Disponibilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Peñaflor</td>
            <td>$55.000</td>
            <td>Lunes a Sabado de 09:00 a 20:00</td>
          </tr>
        </tbody>
      </table>
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        DESCRIPCIÓN DE ACTIVIDADES DEL SERVICIO
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">            
              Realizo reparación de diferentes tipos y marcas de artefactos
              eléctricos.<code> Experiencia de 10 años</code>, especialista en lavadoras y
              refrigeradores. Incluye garantía de 6 meses.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        CONDICIONES
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><ul>
        <li>El aparato debe estar ubicado en el lugar de armado y debe existir el espacio necesario para su correcto armado.</li>
        <li>Valor de servicio es válido solo para un aparato.</li>
        <li>Evite que niños y mascotas circulen en el entorno donde se realizará el trabajo.</li>
        <li>El servicio inicia en el rango horario contratado.</li>
        <li>Se recomienda que la persona que contrata el servicio esté en el domicilio durante la ejecución de éste o bien antes del término. Para que así pueda verificar la realización de las labores solicitadas.</li>
        <li>Se recomienda no dejar cosas de valor en el domicilio durante la ejecución del servicio.</li>
        </ul></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        EXCLUSIONES
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><ul>
        <li>No incluye modificaciones de productos, trabajos de electricidad ni gasfitería.</li>
        <li>No incluye retiro escombros, basura queda en sacos al interior del domicilio donde el cliente disponga.</li>
        </ul></div>
    </div>
  </div>
</div>
      
      <button type="button" class="botonSolicita btn "><div class="letra2">Quiero Este Servicio</div></button>
      <div class="position-absolute top-50 start-50">
        <h2>Envia tu mensaje</h2>
      <textarea id="chatear" placeholder="Hola Ingresa tu mensaje">
      </textarea>
      <br></br>
      <button type="submit" class="botonEnviar btn"><div class="letra">Enviar</div></button>
      </div>
<br></br>
<div class="interesar">
  <br></br>
      <h3> Te podria interesar</h3>
      <br></br>
      <div class="tarjeta">
      <div class="card row align-items-start" style={{width: '18rem'}}>
      <img src={electricista} class="card-img-top" alt="..."/>
      <div class="card-body">
        <p class="card-text">Electricista.</p>
      </div>
      </div>
      <div class="card row align-items-start" style={{width: '18rem'}}>
      <img src={plomero} class="card-img-top" alt="..."/>
      <div class="card-body">
        <p class="card-text">Plomero.</p>
      </div>
      </div>
      <div class="card row align-items-start" style={{width: '18rem'}}>
      <img src={cuidado} class="card-img-top" alt="..."/>
      <div class="card-body">
        <p class="card-text">Cuidado de Adultos.</p>
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
