package com.vecinwork.proyecto_integrador.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import antlr.collections.List;

@Entity(name="Servicios")

public class Servicios {
    @Id
    @GeneratedValue
    private Integer id;
    private String rama;
    private String Subrama;

    @OneToMany(mappedBy = "servicios ", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Publicaciones> publicaciones;

    public Servicios() {
    }

    public Servicios(Integer id, String rama, String subrama) {
        this.id = id;
        this.rama = rama;
        Subrama = subrama;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRama() {
        return rama;
    }

    public void setRama(String rama) {
        this.rama = rama;
    }

    public String getSubrama() {
        return Subrama;
    }

    public void setSubrama(String subrama) {
        Subrama = subrama;
    }

    public List<Publicaciones> getPublicaciones() {
        return publicaciones;
    }

    public void setPublicaciones(List<Publicaciones> publicaciones) {
        this.publicaciones = publicaciones;
    }

        
    }

