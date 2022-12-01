package com.vecinwork.proyecto_integrador.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;  


@Entity(name = "Solicitud")
public class Solicitud {
    @Id
    @GeneratedValue

    private int id;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

    private Usuario usuario;

    /* @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "publicaciones_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

    private Publicaciones publicaciones; */

    public Solicitud() {
    }

    public Solicitud(int id/* , Usuario usuario, Publicaciones publicaciones*/) {
        this.id = id;
    /* this.usuario = usuario;
        this.publicaciones = publicaciones;*/
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
/* 
    public Publicaciones getPublicaciones() {
        return publicaciones;
    }

    public void setPublicaciones(Publicaciones publicaciones) {
        this.publicaciones = publicaciones;
    }  */

    
}

