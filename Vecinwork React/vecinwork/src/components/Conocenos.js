import React from "react";
import './css/style.css'
import Grupo4 from './img/Grupo4.png';
import conocenos from './img/conocenos.webp';
import personas2 from './img/personas2.jpg';

const ConocenosComponent = () => {
    return (
        <div>
                        <h1 className="conocenos">¿Quiénes Somos?</h1>
            <div className="ImagenConocenos"><img src={Grupo4} className="img-fluid" alt="..."></img></div>
            <h2 className="subtitulo container-fluid"><b>Conectamos a vecinos y creamos comunidad</b></h2>
            <br/>
            <div className="parrafo">
                <p><b>VecinWork</b> es una página web que alberga una plataforma donde personas ofrecen sus oficios o servicios esporádicos dentro de su comunidad, permitiendo la difusión de oportunidades laborales y colaborando a cubrir las necesidades de los vecinos que requieran estos tipos de servicios. </p>
            </div>
            
            <div className="ImagenConocenos2"><img src={conocenos} className="img-fluid" alt="..."></img></div>
            <div className="vision">
                <h2><b>Visión</b></h2>
                <p>Buscamos crear mayores oportunidades laborales para las personas.
                    Colaborar en la disminución del desempleo y en la difusión de oficios de vecinos. </p>
            </div>
            <div className="mision">
                <h2><b>Misión</b></h2>
                <p>Conectamos a vecinos y creamos comunidad a través del ofrecimiento de trabajos esporádicos. Velamos por la seguridad y calidad a la hora de la entrega de servicios </p>
            </div>
            <div className="Imagenpersonas"><img src={personas2} className="img-fluid" alt="..."></img></div>
            <button id="botonContactanos" type="button" className="btn btn-outline-danger">¡Contactanos!</button>

        </div>


    )
}
export default ConocenosComponent;