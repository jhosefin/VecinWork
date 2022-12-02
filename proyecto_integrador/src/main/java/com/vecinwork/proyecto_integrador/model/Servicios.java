package com.vecinwork.proyecto_integrador.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity(name="Servicios")

public class Servicios {
    @Id
    @GeneratedValue
    private Integer id;
    private String rama;
    private String Subrama;

    @OneToMany(mappedBy = "servicios", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Publicacion> publicacion;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 

    public Servicios() {
    }

    public Servicios(Integer id, String rama, String subrama, List<Publicacion> publicacion) {
        this.id = id;
        this.rama = rama;
        Subrama = subrama;
        this.publicacion = publicacion;
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

    public List<Publicacion> getPublicacion() {
        return publicacion;
    }

    public void setPublicacion(List<Publicacion> publicacion) {
        this.publicacion = publicacion;
    }

    


        
    }

