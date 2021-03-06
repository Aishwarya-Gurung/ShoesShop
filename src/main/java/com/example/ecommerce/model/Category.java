package com.example.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "category", schema = "shoes_shop")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long categoryId;

    @NotEmpty
    private String categoryName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category",  fetch = FetchType.LAZY)
    @JsonManagedReference(value =  "product-category")
    private List<Product> products;

}
