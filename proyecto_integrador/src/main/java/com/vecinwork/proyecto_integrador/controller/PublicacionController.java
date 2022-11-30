package com.vecinwork.proyecto_integrador.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.vecinwork.proyecto_integrador.model.Publicacion;
import com.vecinwork.proyecto_integrador.service.PublicacionService;

@CrossOrigin("*")
@Controller
public class PublicacionController {

    private PublicacionService publicacionService;

    public PublicacionController (@Autowired PublicacionService publicacionService){
        this.publicacionService = publicacionService;
    }

    @GetMapping("/publicacion/{id}")
    public Publicacion getPublicacion(@PathVariable Integer id){
        return publicacionService.getPublicacion(id);
    }

    @PostMapping("/titulo")
    public void newTitulo(@RequestBody Publicacion titulo){
        return publicacionService.save(titulo);
    }

    @PostMapping("/descripcion")
    public void newDescripcion(@RequestBody Publicacion descripcion){
        return publicacionService.save(descripcion);
    }

    @PostMapping("/precio")
    public void newPrecio(@RequestBody Publicacion precio){
        return publicacionService.save(precio);
    }

    @PostMapping("/fecha")
    public void newFecha(@RequestBody Publicacion fecha){
        return publicacionService.save(fecha);
    }

    @GetMapping("/publicacion/{activo}")
    public Publicacion getEstado(@PathVariable Boolean activo){
        return publicacionService.getEstado(activo);
    }

    @DeleteMapping("/deletePublicacion/{id}")
    public void deletePublicacion(@PathVariable Integer id){
        publicacionService.deletePublicacion(id);
    }

    
}
