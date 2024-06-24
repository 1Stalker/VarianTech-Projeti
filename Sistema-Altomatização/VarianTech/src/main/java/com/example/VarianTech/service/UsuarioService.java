package com.example.VarianTech.service;

import com.example.VarianTech.model.Usuario;
import com.example.VarianTech.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario salvarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Optional<Usuario>obterUsuario(String email) {
        return Optional.ofNullable(usuarioRepository.findByEmail(email));
    }

    public void deletarUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }

    public Optional<Usuario> obterUsuarioPorEmail(String email) {

        return Optional.empty();
    }
}
