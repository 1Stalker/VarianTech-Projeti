package com.example.VarianTech.Controller;

import com.example.VarianTech.model.Usuario;
import com.example.VarianTech.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
class UsuarioController {

    // Corrigir a injeção de dependência do serviço de usuário
    @Autowired
    private UsuarioService usuarioService;

    // Corrigir o tipo e a lógica do método criarUsuario
    @PostMapping
    public Usuario criarUsuario(@RequestBody Usuario usuario) {
        return usuarioService.salvarUsuario(usuario);
    }

    // Corrigir o tipo e a lógica do método obterUsuario
    @GetMapping("/{email}")
    public Optional<Usuario> obterUsuario(@PathVariable String email) {
        return usuarioService.obterUsuarioPorEmail(email);
    }

    // Corrigir o tipo e a lógica do método deletarUsuario
    @DeleteMapping("/{id}")
    public void deletarUsuario(@PathVariable Long id) {
        usuarioService.deletarUsuario(id);
    }
}
