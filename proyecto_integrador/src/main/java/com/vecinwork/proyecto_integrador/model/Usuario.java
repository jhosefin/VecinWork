package com.vecinwork.proyecto_integrador.model;

import java.util.Date;

import javax.persistence.*;

@Entity(name="Usuario")
public class Usuario {
    
    @Id
    @GeneratedValue
    private int id;
    private String contrasenia;
    private String apPaterno;
    private String apMaterno;
    private Date fechaNacimiento;
    private String email;
    private int numTelefonico;
    private String region;
    private String comuna;
    
}
