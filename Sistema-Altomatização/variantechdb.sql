CREATE DATABASE variantechdb;
USE variantechdb;
CREATE TABLE Usuario (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    DTYPE VARCHAR(31) NOT NULL
);

CREATE TABLE Cliente (
    id BIGINT PRIMARY KEY,
    endereco VARCHAR(255),
    telefone VARCHAR(20),
    FOREIGN KEY (id) REFERENCES Usuario(id)
);

CREATE TABLE Administrador (
    id BIGINT PRIMARY KEY,
    cargo VARCHAR(100),
    FOREIGN KEY (id) REFERENCES Usuario(id)
);
