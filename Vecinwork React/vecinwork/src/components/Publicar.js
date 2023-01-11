import React, { useEffect, useState } from "react";

const PublicacionInicial = {
    publicacion_id: "",
    titulo: "",
    categoria: "",
    descripcion: "",
    precio: "",
    activo: "",
    fecha: ""
}

const Publicar = ({ postAdd, postEditado, setPostEditado, postEdit }) => {

    const [publicacion, setPublicacion] = useState(PublicacionInicial);
    const { publicacion_id, titulo, categoria, descripcion, precio, fecha } = publicacion;

    useEffect(() => {
        if (postEditado !== null) {
            setPublicacion(postEditado);
        } else {
            setPublicacion({
                publicacion_id: "",
                titulo: "",
                categoria: "",
                descripcion: "",
                precio: "",
                activo: "",
                fecha: ""
            });
        };
    }, [postEditado])

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...publicacion,
            [e.target.name]: e.target.value,
        }
        setPublicacion(changedFormValue);
    }

    return (
        <form>
            <div className="container">

<h3 className="mt-md-4 d-flex justify-content-center"> Crea tu publicación </h3>
                <div className="row">


                    <input
                        type="text"
                        className="form-control"
                        name="publicacion_id"
                        value={publicacion_id}
                        onChange={handleInputChange}
                        disabled
                        hidden />

                    <div className="col">
                        <label className="mt-md-2">Título &nbsp;&nbsp;</label>
                        <label id="span" className="form-text">Máximo 50 caracteres</label>
                        <input
                            type="text"
                            className="form-control mt-md-2"
                            name="titulo"
                            value={titulo}
                            onChange={handleInputChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label className="mt-md-4">Descripción &nbsp;&nbsp;<p></p> </label>
                        <label id="span" className="form-text">Máximo 1000 caracteres</label>
                        <textarea
                            
                            className="form-control"
                            name="descripcion"
                            value={descripcion}
                            onChange={handleInputChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label className="mt-md-4">Precio</label>
                        <input
                            type="text"
                            className="form-control mt-md-2"
                            name="precio"
                            value={precio}
                            onChange={handleInputChange} />
                    </div>
                    <div className="col">
                        <label className="mt-md-4">Categoría</label>
                        <input
                            type="text"
                            className="form-control mt-md-2"
                            name="categoria"
                            value={categoria}
                            onChange={handleInputChange} />

                    </div>
                    <div className="col">
                        <label className="mt-md-4">Fecha</label>
                        <input
                            type="date"
                            className="form-control mt-md-2"
                            name="fecha"
                            value={fecha}
                            onChange={handleInputChange} />
                    </div>
                </div>

                <div>
                    <button
                        type="button"
                        className="btn btn-success mt-md-4"
                        onClick={() => postAdd(publicacion)}
                    >
                        Ingresar publicacion
                    </button>
                </div>

            </div>
        </form>
    );
};

export default Publicar;