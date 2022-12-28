import axios from 'axios';

import {url} from './Config';

const addPost = async(publicacion)=>{
    const res = await axios.post(url + "/Publicacion", publicacion);
    console.log(res);
    return res.data;
};

const getPost = async(publicacion_id)=>{
    const res = await axios.get(url + '/Publicacion/' + publicacion_id);
    console.log(res);
    return res.data;
};

const editPost = async(publicacion) => {
    const res = await axios.put(url + "/Publicacion/editar", publicacion);
    console.log(res);
    return res.data;
};

const getAllPosts = async()=>{
    const res = await axios.get(url + "/Publicacion/findAll");
    console.log(res)
    return res.data;
}

const deletePost = async(publicacion_id) => {
    const res = await axios.delete(url + "/Publicacion/eliminarPublicacion/" + publicacion_id);
    console.log(res);
    return res.data;
};





export {addPost,editPost,deletePost,getPost,getAllPosts}