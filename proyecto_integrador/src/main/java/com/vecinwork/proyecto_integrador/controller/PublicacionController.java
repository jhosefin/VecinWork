package com.vecinwork.proyecto_integrador.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.vecinwork.proyecto_integrador.model.Publicacion;
import com.vecinwork.proyecto_integrador.service.PublicacionService;

@RestController
@CrossOrigin("*")
public class PublicacionController {

    private PublicacionService publicacionService;

    public PublicacionController(@Autowired PublicacionService publicacionService) {
        this.publicacionService = publicacionService;
    }

    @PostMapping("/Publicacion")
    public Publicacion nuevaPublicacion(@RequestBody Publicacion publicacion) {
        return publicacionService.save(publicacion);
    }

    @GetMapping("/Publicacion/{id}")
    public Publicacion obtenerPost(@PathVariable Integer publicacion_id) {
        return publicacionService.getPost(publicacion_id);
    }

    @PutMapping("/Publicacion/editar")
    public Publicacion editarPublicacion(@RequestBody Publicacion publicacion) {
        return publicacionService.save(publicacion);
    }

    @RequestMapping("/Publicacion/findAll")
    public List<Publicacion> getAllPost() {
        List<Publicacion> listaPublicacion = publicacionService.getAllPost();
        return listaPublicacion;
    }

    @DeleteMapping("/Publicacion/eliminarPublicacion/{id}")
    public void eliminarPublicacion(@PathVariable Integer publicacion_id) {
        publicacionService.delete(publicacion_id);
    }

}