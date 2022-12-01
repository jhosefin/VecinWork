package com.vecinwork.proyecto_integrador.service;


import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.vecinwork.proyecto_integrador.model.Publicacion;
import com.vecinwork.proyecto_integrador.repository.PublicacionRepository;


@Service
@Transactional
public class PublicacionService {

    private PublicacionRepository publicacionRepository;

    public PublicacionService(PublicacionRepository publicacionRepository){
        this.publicacionRepository = publicacionRepository;
    }

    public void savePublicacion(Publicacion publicacion){
        publicacionRepository.save(publicacion); 
    }

    public void updatePublicacion(Publicacion publicacion){
        publicacionRepository.save(publicacion);
    }

    public List<Publicacion> findAll(){
        return publicacionRepository.findAll();
    } 

    public void deletePublicacion(Integer id){
        publicacionRepository.deleteById(id);
    }
/*     public Publicacion getPublicacion(Integer id) {
        publicacionRepository.findById(id);
    }

    public void newTitulo(Publicacion id) {
        publicacionRepository.save(id);
    }

    public void newDescripcion(Publicacion id) {
        publicacionRepository.save(id);
    }
    
    public void newPrecio(Publicacion id) {
        publicacionRepository.save(id);
    }

    public void newUser(Publicacion id) {
        publicacionRepository.save(id);
    }

    public void deletePublicacion(Integer id) {
        publicacionRepository.deleteById(id);
    } */


}
