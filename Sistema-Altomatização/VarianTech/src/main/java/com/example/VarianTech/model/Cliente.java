package com.example.VarianTech.model;

import jakarta.persistence.Entity;
@Entity
public class Cliente extends Usuario {
    private String endereco;
    private String telefone;

    // Getters e Setters
    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
}
