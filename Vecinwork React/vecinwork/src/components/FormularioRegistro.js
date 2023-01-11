import React, { useState, useEffect } from "react";

const initialUsuario = {
    usuario_id: "",
    nombre: "",
    apellidos: "",
    contrasenia: "",
    passwordRepeated: "",
    fechaNacimiento: "",
    correo: "",
    numTelefonico: "",
    region: "",
    comuna: "",
    direccion: "",
    numDocumento: "",

};

const FormularioRegistro = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {

    const [usuario, setUsuario] = useState(initialUsuario);
    const { usuario_id, nombre, apellidos, contrasenia, passwordRepeated, fechaNacimiento, correo, numTelefonico, region, comuna, direccion, numDocumento } = usuario;

    useEffect(() => {
        if (usuarioEditado !== null) {
            setUsuario(usuarioEditado);
        } else {
            setUsuario({
                usuario_id: "",
                nombre: "",
                apellidos: "",
                contrasenia: "",
                passwordRepeated: "",
                fechaNacimiento: "",
                correo: "",
                numTelefonico: "",
                region: "",
                comuna: "",
                direccion: "",
                numDocumento: "",
            }
            );
        }

    }, [usuarioEditado]);

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...usuario,
            [e.target.name]: e.target.value,
        }
        setUsuario(changedFormValue);
    }

    return (
        <div className="container mt-md-5 mb-md-5" id="containerFormularioRegistro">
            <form className="ms-md-3 me-md-3">
                
                <div className="mb-3">
                    <h3 className="d-md-flex justify-content-md-center mt-md-4 mb-md-4 fs-2">Regístrate</h3>
                    <h4 className="fs-5 mb-md-4">Datos Básicos</h4>
                </div>
                <div className="row">
                    <div className="col">
                        <input
                            type="hidden"
                            placeholder="ID"
                            className="form-control"
                            id="exampleID"
                            name="usuario_id"
                            value={usuario_id}
                            onChange={handleInputChange}
                            disabled />
                    </div>

                </div>
                <div className="row">

                    <div className="col">
                        <input
                            type="text"
                            placeholder="Nombres"
                            className="form-control"
                            id="exampleInputNombres"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col">
                        <input
                            type="text"
                            placeholder="Apellidos"
                            className="form-control"
                            id="exampleInputApellidos"
                            name="apellidos"
                            value={apellidos}
                            onChange={handleInputChange} />
                    </div>

                </div>

                <div className="row">

                    <div className="col">
                        <input
                            type="text"
                            placeholder="Fecha de nacimiento (yyyy-mm-dd)"
                            className="form-control"
                            id="exampleInputFechaNacimiento"
                            name="fechaNacimiento"
                            value={fechaNacimiento}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col">
                        <input
                            type="text"
                            placeholder="Teléfono"
                            className="form-control"
                            id="exampleInputTelefono"
                            name="numTelefonico"
                            value={numTelefonico}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col">
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            className="form-control"
                            id="exampleInputEmail"
                            name="correo"
                            value={correo}
                            onChange={handleInputChange} />
                    </div>



                </div>


                <div className="row">

                    <div className="col">
                        <input
                            type="text"
                            placeholder="Región"
                            className="form-control"
                            id="exampleInputRegion"
                            name="region"
                            value={region}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col">
                        <input
                            type="text"
                            placeholder="Comuna"
                            className="form-control"
                            id="exampleInputComuna"
                            name="comuna"
                            value={comuna}
                            onChange={handleInputChange} />
                    </div>

                    <div className="col">
                        <input
                            type="text"
                            placeholder="Dirección"
                            className="form-control"
                            id="exampleInputDirección"
                            name="direccion"
                            value={direccion}
                            onChange={handleInputChange} />
                    </div>
                </div>



                <div className="row">
                    <div className="col">
                        <select className="form-select form-select-sm ">
                            <option>RUT</option>
                        </select>
                    </div>

                    <div className="col">
                        <input
                            type="text"
                            placeholder="Número de documento"
                            className="form-control"
                            id="exampleInputNumDocumento"
                            name="numDocumento"
                            value={numDocumento}
                            onChange={handleInputChange} />
                    </div>

                </div>

                <div>
                    <h3 className="fs-5 mt-md-4 mb-md-4">Privacidad</h3>
                </div>

                <div className="row">

                    <div className="col">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="form-control"
                            id="exampleInputPassword"
                            name="contrasenia"
                            value={contrasenia}
                            onChange={handleInputChange} />
                    </div>

                    <div className="col"></div>
                </div>

                <div className="row">

                    <div className="col">
                        <input
                            type="password"
                            placeholder="Repetir contraseña"
                            className="form-control"
                            id="exampleInputPasswordRepeated"
                            name="passwordRepeated"
                            value={passwordRepeated}
                            onChange={handleInputChange} />
                    </div>

                    <div className="col"></div>
                </div>




                <div className="mb-3 form-check mt-md-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label id="tituloTerminosCondiciones" className="form-check-label" for="exampleCheck1">Acepto los <a href="www.google.com">Términos y Condiciones</a></label>
                </div>
                <div className="d-md-flex justify-content-md-center">
                    {usuarioEditado !== null ? (
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => userEdit(usuario)}
                        >
                            Editar usuario
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => userAdd(usuario)}
                        >
                            Ingresar usuario
                        </button>
                    )}
                    {usuarioEditado !== null ? (
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => setUsuarioEditado(null)}
                        >
                            Cancelar
                        </button>
                    ) : (
                        <></>
                    )}
                </div>
                <div>
                    <h6 id="tituloIniciarSesion" className="mb-md-3">¿Ya tienes una cuenta? <a href="wwww.google.com">Iniciar sesión</a></h6>
                </div>
            </form>
        </div>
    );
};

export default FormularioRegistro;