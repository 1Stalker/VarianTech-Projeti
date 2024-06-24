package com.example.VarianTech.model;

import jakarta.persistence.GenerationType;

public @interface GeneratedValue {
    GenerationType strategy();
}
