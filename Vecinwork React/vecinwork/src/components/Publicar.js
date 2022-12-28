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
    const { publicacion_id, titulo, categoria, descripcion, precio, activo, fecha } = publicacion;

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
            <div class="container">

<h3 class="mt-md-4 d-flex justify-content-center"> Crea tu publicación </h3>
                <div class="row">


                    <input
                        type="text"
                        class="form-control"
                        name="publicacion_id"
                        value={publicacion_id}
                        onChange={handleInputChange}
                        disabled
                        hidden />

                    <div class="col">
                        <label class="mt-md-2">Título &nbsp;&nbsp;</label>
                        <label id="span" class="form-text">Máximo 50 caracteres</label>
                        <input
                            type="text"
                            class="form-control mt-md-2"
                            name="titulo"
                            value={titulo}
                            onChange={handleInputChange} />
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label class="mt-md-4">Descripción &nbsp;&nbsp;<p></p> </label>
                        <label id="span" class="form-text">Máximo 1000 caracteres</label>
                        <textarea
                            
                            class="form-control"
                            name="descripcion"
                            value={descripcion}
                            onChange={handleInputChange} />
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label class="mt-md-4">Precio</label>
                        <input
                            type="text"
                            class="form-control mt-md-2"
                            name="precio"
                            value={precio}
                            onChange={handleInputChange} />
                    </div>
                    <div class="col">
                        <label class="mt-md-4">Categoría</label>
                        <input
                            type="text"
                            class="form-control mt-md-2"
                            name="categoria"
                            value={categoria}
                            onChange={handleInputChange} />

                    </div>
                    <div class="col">
                        <label class="mt-md-4">Fecha</label>
                        <input
                            type="date"
                            class="form-control mt-md-2"
                            name="fecha"
                            value={fecha}
                            onChange={handleInputChange} />
                    </div>
                </div>

                <div>
                    <button
                        type="button"
                        class="btn btn-success mt-md-4"
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