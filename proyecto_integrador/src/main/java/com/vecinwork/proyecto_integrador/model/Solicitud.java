package com.vecinwork.proyecto_integrador.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
/* import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne; */
import javax.persistence.OneToMany;

//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;  


@Entity(name = "Solicitud")
public class Solicitud {
    @Id
    @GeneratedValue

    private int id;


/*     @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

    private Usuario usuario; */

    @OneToMany(mappedBy = "solicitud", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Publicacion> publicacion;

    public Solicitud() {
    }

    public Solicitud(int id, /*Usuario usuario,*/ List<Publicacion> publicacion) {
        this.id = id;
  /*       this.usuario = usuario; */
        this.publicacion = publicacion;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

/*     public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    } */

    public List<Publicacion> getPublicacion() {
        return publicacion;
    }

    public void setPublicacion(List<Publicacion> publicacion) {
        this.publicacion = publicacion;
    } 

    

    
}

