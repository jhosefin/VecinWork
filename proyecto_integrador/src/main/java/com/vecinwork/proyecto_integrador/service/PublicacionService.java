package com.vecinwork.proyecto_integrador.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.vecinwork.proyecto_integrador.model.Publicacion;

@Service
@Transactional
public interface PublicacionService {

    Publicacion getPost(Integer publicacion_id);

    Publicacion save(Publicacion user);

    void delete(Integer publicacion_id);

    List<Publicacion> getAllPost();

}