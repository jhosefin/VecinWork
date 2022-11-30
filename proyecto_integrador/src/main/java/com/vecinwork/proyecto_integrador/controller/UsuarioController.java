package com.vecinwork.proyecto_integrador.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vecinwork.proyecto_integrador.model.Usuario;
import com.vecinwork.proyecto_integrador.service.UsuarioService;

@RestController
@CrossOrigin("*")
public class UsuarioController {
    
    private UsuarioService usuarioService;

    public UsuarioController(@Autowired UsuarioService usuarioService){
        this.usuarioService = usuarioService;
    }

    @GetMapping("/usuario/{id}")
    public Usuario getUser (@PathVariable Integer id){
        return usuarioService.getUser(id);
    }

    @PostMapping("/usuario")
    public Usuario newUser(@RequestBody Usuario usuario){
        return usuarioService.save(usuario);
    }

    @PutMapping("/usuario")
    public Usuario updateUsuario(@RequestBody Usuario usuario){
        return usuarioService.save(usuario);
    }

    @DeleteMapping("/borrarUsuario/{id}")
    public void deleteUser(@PathVariable Integer id){
        usuarioService.delete(id);
    }

}
