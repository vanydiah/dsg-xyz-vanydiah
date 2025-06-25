package com.xyz.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import com.xyz.model.Product;
import com.xyz.repository.ProductRepository;


@Service
public class ProductService {
    @Autowired
    private ProductRepository repo;

    public List<Product> getAll(String brand) {
        return (brand == null || brand.isEmpty()) ? repo.findAll() : repo.findByBrandContainingIgnoreCase(brand);
    }

    public Product save(Product product) { return repo.save(product); }

    public Product update(Long id, Product p) {
        Product product = repo.findById(id).orElseThrow();
        product.setBrand(p.getBrand());
        product.setType(p.getType());
        product.setStock(p.getStock());
        product.setPrice(p.getPrice());
        product.setDescription(p.getDescription());
        return repo.save(product);
    }

    public void delete(Long id) { repo.deleteById(id); }
}