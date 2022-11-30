package com.vecinwork.proyecto_integrador.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vecinwork.proyecto_integrador.model.Servicios;
import com.vecinwork.proyecto_integrador.service.ServicioService;

@RestController
@CrossOrigin("*")
public class ServiciosController {
    private ServicioService servicioService;
    public ServiciosController (@Autowired ServicioService servicioService){
        this.servicioService = servicioService;
    }
    @PostMapping("/servicios/save")
        public void guardarServicios(@RequestBody Servicios servicios){
            servicioService.saveServicios(servicios);
        
        }
        
        @PostMapping("/servicios/update")
        public void actualizarServicios(@RequestBody Servicios servicios){
            servicioService.updateServicios(servicios);
        
        }

        @GetMapping("/servicios/deleteServicios/{id}")
        public void deletServicios(@PathVariable Integer id){
            servicioService.deleteServicios(id);
        
        }

}
