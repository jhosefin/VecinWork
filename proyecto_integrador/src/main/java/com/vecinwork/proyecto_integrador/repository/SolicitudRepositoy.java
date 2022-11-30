package com.vecinwork.proyecto_integrador.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.vecinwork.proyecto_integrador.models.Solicitud;


public interface SolicitudRepositoy extends JpaRepository<Solicitud , Integer>{

    @Query(value = "SELECT * FROM Solicitudes WHERE id = ?1", nativeQuery = true)
    List<Solicitud> findAllSolicitud(Integer id );
    
}
