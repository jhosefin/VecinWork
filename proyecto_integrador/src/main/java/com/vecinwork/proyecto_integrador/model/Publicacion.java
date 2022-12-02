package com.vecinwork.proyecto_integrador.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity(name = "Publicacion")
public class Publicacion {
    
@Id
@GeneratedValue

private int id;
private String titulo;
private int precio;
private String descripcion;
private boolean activo;
private Date fecha;

@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "usuario_id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

private Usuario usuario; 


@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "servicios_id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

private Servicios servicios;

@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "solicitud_id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 

private Solicitud solicitud;

public Publicacion() {
}

public Publicacion(int id, String titulo, int precio, String descripcion, boolean activo, Date fecha, Usuario usuario,
        Servicios servicios, Solicitud solicitud) {
    this.id = id;
    this.titulo = titulo;
    this.precio = precio;
    this.descripcion = descripcion;
    this.activo = activo;
    this.fecha = fecha;
    this.usuario = usuario;
    this.servicios = servicios;
    this.solicitud = solicitud;
}

public int getId() {
    return id;
}

public void setId(int id) {
    this.id = id;
}

public String getTitulo() {
    return titulo;
}

public void setTitulo(String titulo) {
    this.titulo = titulo;
}

public int getPrecio() {
    return precio;
}

public void setPrecio(int precio) {
    this.precio = precio;
}

public String getDescripcion() {
    return descripcion;
}

public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
}

public boolean isActivo() {
    return activo;
}

public void setActivo(boolean activo) {
    this.activo = activo;
}

public Date getFecha() {
    return fecha;
}

public void setFecha(Date fecha) {
    this.fecha = fecha;
}

public Usuario getUsuario() {
    return usuario;
}

public void setUsuario(Usuario usuario) {
    this.usuario = usuario;
}

public Servicios getServicios() {
    return servicios;
}

public void setServicios(Servicios servicios) {
    this.servicios = servicios;
}

public Solicitud getSolicitud() {
    return solicitud;
}

public void setSolicitud(Solicitud solicitud) {
    this.solicitud = solicitud;
}






    
}
