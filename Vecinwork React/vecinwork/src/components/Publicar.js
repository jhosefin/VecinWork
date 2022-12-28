import React from "react";

const Publicar = () => {
    return(
        <div class="container mt-md-5 " id="containerPublicación">
                        <div class="card">
                            <div class="card-body">
                                <div class="btn-group-horizontal col-7" role="group"> {/*Izq*/}
                                    <div> {/*Nombre que esta sobre las elecciones de trabajo */}
                                                    <label for="firstname">Tipo de Trabajo</label>
                                                    <div>{/*Menú de selección*/}
                                                        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                        <option selected>Carpintería</option>
                                                        <option value="1">Cuidado de niños</option>
                                                        <option value="2">Jardineria</option>
                                                        <option value="3">Desarrollador</option>
                                                        </select>
                                                    </div>
                                    </div>
                                                    <div class="mb-3">{/* Caja para describir trabajo */}
                                                        <label for="exampleFormControlTextarea1" class="form-label">Descripción</label>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div> 
                                                    
                                </div>

                                    <div>

                                    </div>
                                     
                                        <div class="col-sm"> {/*Insertar imagenes*/}
                                            <div class="mb-3">{/*Cajita para seleccionar imagenes de trabajos */}
                                                    <label for="formFile" class="form-label">Imagenes del Servicio</label>
                                                    <input 
                                                    class="form-control" 
                                                    type="file" 
                                                    id="formFile">
                                                    </input>
                                            </div>
                                            <div class="mb-3">{/*Cajita para seleccionar imagenes de certificados */}
                                                <label for="formFile" class="form-label">Certificados</label>
                                                <input 
                                                class="form-control" 
                                                type="file" 
                                                id="formFile">
                                                </input>
                                            </div>
                                        </div>                   
                            </div>
                        </div>
                                
                                
  
        </div>
      
    );
};

export default Publicar;