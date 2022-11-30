package com.vecinwork.proyecto_integrador.model;

import java.util.Date;

import javax.persistence.*;

@Entity(name="Usuario")
public class Usuario {
    
    @Id
    @GeneratedValue
    private int id;
    private String contrasenia;
    private String nombre;
    private String apellidos;
    private Date fechaNacimiento;
    @Column(name="email",unique = true)
    private String correo;
    @Column(name="numCel",unique = true)
    private int numTelefonico;
    private String region;
    private String comuna;
    private String direccion;
    
    
    public Usuario() {
    }


    public Usuario(int id, String contrasenia, String nombre, String apellidos, Date fechaNacimiento, String correo,
            int numTelefonico, String region, String comuna, String direccion) {
        this.id = id;
        this.contrasenia = contrasenia;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.correo = correo;
        this.numTelefonico = numTelefonico;
        this.region = region;
        this.comuna = comuna;
        this.direccion = direccion;
    }


    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }


    public String getContrasenia() {
        return contrasenia;
    }


    public void setContrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }


    public String getNombre() {
        return nombre;
    }


    public void setNombre(String nombre) {
        this.nombre = nombre;
    }


    public String getApellidos() {
        return apellidos;
    }


    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }


    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }


    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }


    public String getCorreo() {
        return correo;
    }


    public void setCorreo(String correo) {
        this.correo = correo;
    }


    public int getNumTelefonico() {
        return numTelefonico;
    }


    public void setNumTelefonico(int numTelefonico) {
        this.numTelefonico = numTelefonico;
    }


    public String getRegion() {
        return region;
    }


    public void setRegion(String region) {
        this.region = region;
    }


    public String getComuna() {
        return comuna;
    }


    public void setComuna(String comuna) {
        this.comuna = comuna;
    }
    
    public String getDireccion() {
        return direccion;
    }


    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

}
