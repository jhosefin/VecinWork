package com.vecinwork.proyecto_integrador.service;

import org.springframework.stereotype.Service;

import com.vecinwork.proyecto_integrador.model.Servicios;
import com.vecinwork.proyecto_integrador.repository.ServiciosRepository;

@Service
public class ServicioService {
    private ServiciosRepository serviciosRepository;
    public ServicioService (ServiciosRepository serviciosRepository){
        this.serviciosRepository = serviciosRepository;
    } 
    public void saveServicios(Servicios servicios){
        serviciosRepository.save(servicios);
    }
    public void updateServicios(Servicios servicios){
        serviciosRepository.save(servicios);
    }
    public void deleteServicios(Integer id){
        serviciosRepository.deleteById(id);
    }
    
}
