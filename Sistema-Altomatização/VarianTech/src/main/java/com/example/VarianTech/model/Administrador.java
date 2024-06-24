package com.example.VarianTech.model;

import jakarta.persistence.Entity;

@Entity
public class Administrador extends Usuario {
    private String cargo;

    // Getters e Setters
    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }
}

