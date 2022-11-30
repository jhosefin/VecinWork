package com.vecinwork.proyecto_integrador.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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

public Publicacion() {
}

public Publicacion(int id, String titulo, int precio, String descripcion, boolean activo, Date fecha) {
    this.id = id;
    this.titulo = titulo;
    this.precio = precio;
    this.descripcion = descripcion;
    this.activo = activo;
    this.fecha = fecha;
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




    
}
