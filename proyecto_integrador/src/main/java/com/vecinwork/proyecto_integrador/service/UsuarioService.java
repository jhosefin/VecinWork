package com.vecinwork.proyecto_integrador.service;

import com.vecinwork.proyecto_integrador.model.Usuario;

public interface UsuarioService {
    
    Usuario getUser(Integer id);

    Usuario save (Usuario user);

    void delete (Integer id);

    

}
