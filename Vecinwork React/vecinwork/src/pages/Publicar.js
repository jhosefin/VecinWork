import React, {useEffect,useState} from "react";
import { FooterComponent, NavbarComponent } from "../components";
import Publicar from "../components/Publicar"
import { addPost, deletePost, getAllPosts, editPost } from "../services/PublicacionService";

const publicacion = [
    {
        publicacion_id:1,
        titulo: "Mecánico a domicilio",
        categoria: "Mecánica",
        descripcion: "Diagnosticar, reparar y ajustar distintos tipos de maquinaria, instalaciones y elementos mecánicos. Montaje, instalación, puesta en marcha y reparación de equipos industriales.",
        precio: 75000,
        activo: true,
        fecha: "2022-12-27"
    }
]

const PublicarPage = () => {

    const [post, setPost] = useState(publicacion);
    const [postEditado, setPostEditado] = useState(null);

    useEffect(() => {
        getPost();
    }, []);

    const getPost = async () => {
        const postBD = await getAllPosts();
        setPost(postBD);
    };

    const postAdd = async (postAgregado) => {
        const postBD = await addPost (postAgregado);
        getPost();
    };

    const postEdit = async (postEditado) =>{
        const postBD = await editPost (postEditado);
        getPost();
    }

    const postDelete = async (publicacion_id) => {
        const postBD = await deletePost (publicacion_id);
        getPost();
    }

    return(
        <div>
            <NavbarComponent/>
            <Publicar postAdd={postAdd} postEditado={postEditado} setPostEditado={setPostEditado} postEdit={postEdit} />
            <FooterComponent/>
        </div>
    )

}

export default PublicarPage;
