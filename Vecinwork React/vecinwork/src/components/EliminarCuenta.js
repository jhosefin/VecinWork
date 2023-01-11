
import React from "react";

const EliminarCuenta =()=>{
    return(
        <div className="container mt-md-5 " id="containerEliminarCuenta">
  <div className="card">
            <div className="card-body">
                <div>{/*Texo de eliminar tu cuenta */}
                <h3><b>¿Quieres eliminar tu cuenta?</b></h3>
                <div>
                    /
                    /
                </div>
                <div>
                <h5>No podrás ver tu historial de servicios ni acceder a nuevas solicitudes. 
                    Si quieres volver a acceder de nuevo deberás pasar por el proceso inscripción de nuevo. 
                    En las próximas 48 horas recibirás a tu correo un e-mail de confirmación que tu cuenta ha sido dada de baja.</h5>
                </div>
                <div>{/*Botón Eliminar */}
                    <button type="button" className="btn btn-primary">Eliminar</button>
                    </div>
                </div>

            </div>
        </div>
</div>
    );
};

export default EliminarCuenta;