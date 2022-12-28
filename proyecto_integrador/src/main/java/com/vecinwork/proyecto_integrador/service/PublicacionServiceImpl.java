package com.vecinwork.proyecto_integrador.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vecinwork.proyecto_integrador.model.Publicacion;
import com.vecinwork.proyecto_integrador.repository.PublicacionRepository;

@Service
@Transactional
public class PublicacionServiceImpl implements PublicacionService{
    
    @Autowired
    private PublicacionRepository publicacionRepository;

    public PublicacionServiceImpl(PublicacionRepository publicacionRepository){
        this.publicacionRepository = publicacionRepository;
    }

    @Override
    public Publicacion getPost(Integer publicacion_id) {
        Optional<Publicacion> posts = publicacionRepository.findById(publicacion_id);
        return posts.orElse(null);
    }

    @Override
    public Publicacion save(Publicacion publicacion){
        return publicacionRepository.save(publicacion); 
    }

    /* @Override
    public Publicacion save(Publicacion publicacion){
        return publicacionRepository.save(publicacion);
    } */

    @Override
    public List<Publicacion> getAllPost(){
        return publicacionRepository.findAll();
    } 

    @Override
    public void delete(Integer publicacion_id){
        publicacionRepository.deleteById(publicacion_id);
    }

}
