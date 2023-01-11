
import React from "react";
const Contraseña =()=>{
    return(
<div className="container mt-md-5 " id="containerContraseña">
    <div className="card">
            <div className="card-body">
                <div> {/*Texto Contraseña */}
                    <h2>Contraseña</h2>
                </div>
                <input /*Form Contraseña Actual */
                    className="form-control form-control-lg" 
                    type="text" 
                    placeholder="Contraseña Actúal" 
                    aria-label=".form-control-lg example">
                </input>
                <input /*Form Nueva Contraseña */
                    className="form-control form-control-lg" 
                    type="text" 
                    placeholder="Nueva Contraseña" 
                    aria-label=".form-control-lg example">
                </input>
                <input /*Form Confirmar Contraseña */
                    className="form-control form-control-lg" 
                    type="text" 
                    placeholder="Confirmar Contraseña" 
                    aria-label=".form-control-lg example">
                </input>
                <div>
                <button type="button" className="btn btn-primary">Guardar</button>
                </div>
            </div>
    </div>
</div>
);
};
export default Contraseña;