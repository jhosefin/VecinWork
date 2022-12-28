package com.vecinwork.proyecto_integrador.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.vecinwork.proyecto_integrador.model.Usuario;

@Service
@Transactional
public interface UsuarioService {
    
    Usuario getUsuario(Integer id);

    Usuario save (Usuario usuario);

    void delete (Integer id);

    List<Usuario> getAllUsers();


}
