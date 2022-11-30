package com.vecinwork.proyecto_integrador.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.vecinwork.proyecto_integrador.model.Usuario;
import com.vecinwork.proyecto_integrador.repository.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService{
    
    private UsuarioRepository usuarioRepository;

    public UsuarioServiceImpl(UsuarioRepository usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public Usuario getUser(Integer id){
        Optional <Usuario> usuarios = usuarioRepository.findById(id);
        return usuarios.orElse(null);
    }

    @Override
    public Usuario save(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    @Override
    public void delete(Integer id){
        usuarioRepository.deleteById(id);
    }

    public List<Usuario> findAllRegionUsuario(String region){
        return usuarioRepository.findAllRegion(region);
    }
}
