// TODO
import React from "react";

const MisDatos =() =>{
    return(
        <div className="container mt-md-5 row" id="containerMisDatos">
           {/*Aquí se deberia rellenar automaticamente con los datos del 
           usuario, pero no cacho como hacerlo asi que chamullo jeje<3 */}
           <label for="firstname">Nombre</label>
            <input 
                type="text" 
                usuario_id="firstname" nombre="firstname" 
                title="Nombre" 
                value="Constanza" 
                className="input-text required-entry" 
                data-validate="{required:true, 'tuten-letters-with-accent': true}" 
                aria-required="true">
            </input>
            
    </div>    
    );
};


export default MisDatos;