

import React from "react";

    const Direcciones =()=> {
        return(
            <div class="container mt-md-5 " id="containerEDirecciones">
            <div class="card-body">
                                    <form class="row g-3">{/*Esto hace que las casillas queden 2 en una linea 
                                                             en este caso solo las de Direcciín u N° de casa o depa*/}
                <div class="col-md-6">
                    <label for="inputAdress" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="inputAdress" placeholder="Ingresa una ubicación">
                    </input>
                </div>
                <div class="col-md-6">
                    <label for="inputnumber" class="form-label">Número de casa o departamento</label>
                    <input type="number" class="form-control" id="inputNumber">
                    </input>
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Alías de dirección</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Población, Villa, etc">
                    </input>
                </div>
                <div class="col-12">
                    <label for="inputInfo" class="form-label">Información adicional</label>
                    <input type="text" class="form-control" id="inputInfo" placeholder="Letra de condominio o letra de casa">
                    </input>
                </div>
                </form>

                </div>
                </div>
        );
    };

export default Direcciones;