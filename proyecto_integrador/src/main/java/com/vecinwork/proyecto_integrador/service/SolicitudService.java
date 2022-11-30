package com.vecinwork.proyecto_integrador.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.vecinwork.proyecto_integrador.models.Solicitud;
import com.vecinwork.proyecto_integrador.repository.SolicitudRepositoy;

@Service
@Transactional
public class SolicitudService {

    private SolicitudRepositoy solicitudRepositoy;

    public SolicitudService(SolicitudRepositoy solicitudRepositoy){
        this.solicitudRepositoy = solicitudRepositoy;
    }

    public void saveSolicitud(Solicitud solicitud){
        solicitudRepositoy.save(solicitud); 
    }

    public void updateSolicitud(Solicitud solicitud){
        solicitudRepositoy.save(solicitud);
    }

    public List<Solicitud> findAll(){
        return solicitudRepositoy.findAll();
    }

    public void eliminarSolicitud(Integer id){
        solicitudRepositoy.deleteById(id);
    }


    public List<Solicitud> buscarPorId(Integer id){//el nombre en amarillo es el que va en el controlador
        return solicitudRepositoy.findAllSolicitud(id);
    }
    
}
