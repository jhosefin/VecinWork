

import React from "react";

    const Direcciones =()=> {
        return(
            <div className="container mt-md-5 " id="containerEDirecciones">
            <div className="card-body">
                                    <form className="row g-3">{/*Esto hace que las casillas queden 2 en una linea 
                                                             en este caso solo las de Direcciín u N° de casa o depa*/}
                <div className="col-md-6">
                    <label for="inputAdress" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="inputAdress" placeholder="Ingresa una ubicación">
                    </input>
                </div>
                <div className="col-md-6">
                    <label for="inputnumber" className="form-label">Número de casa o departamento</label>
                    <input type="number" className="form-control" id="inputNumber">
                    </input>
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Alías de dirección</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Población, Villa, etc">
                    </input>
                </div>
                <div className="col-12">
                    <label for="inputInfo" className="form-label">Información adicional</label>
                    <input type="text" className="form-control" id="inputInfo" placeholder="Letra de condominio o letra de casa">
                    </input>
                </div>
                </form>

                </div>
                </div>
        );
    };

export default Direcciones;