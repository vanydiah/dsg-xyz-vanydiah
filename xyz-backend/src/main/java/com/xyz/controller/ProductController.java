package com.xyz.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import com.xyz.model.Product;
import com.xyz.service.ProductService;


@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {
    @Autowired
    private ProductService service;

    @GetMapping
    public List<Product> getProducts(@RequestParam(required = false) String brand) {
        return service.getAll(brand);
    }

    @PostMapping
    public Product create(@RequestBody Product p) { return service.save(p); }

    @PutMapping("/{id}")
    public Product update(@PathVariable Long id, @RequestBody Product p) { return service.update(id, p); }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) { service.delete(id); }
}
