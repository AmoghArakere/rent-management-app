package com.example.rent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/rents")
public class RentController {

    @Autowired
    private RentRepository rentRepository;

    // Create
    @PostMapping
    public Rent addRent(@RequestBody Rent rent) {
        return rentRepository.save(rent);
    }

    // Read All
    @GetMapping
    public List<Rent> getAllRents() {
        return rentRepository.findAll();
    }

    // Read One
    @GetMapping("/{id}")
    public Optional<Rent> getRentById(@PathVariable Long id) {
        return rentRepository.findById(id);
    }

    // Update
    @PutMapping("/{id}")
    public Rent updateRent(@PathVariable Long id, @RequestBody Rent rentDetails) {
        return rentRepository.findById(id)
                .map(rent -> {
                    rent.setT_date(rentDetails.getT_date());
                    rent.setF_date(rentDetails.getF_date());
                    rent.setTariff(rentDetails.getTariff());
                    rent.setTax(rentDetails.getTax());
                    return rentRepository.save(rent);
                })
                .orElseThrow(() -> new RuntimeException("Rent not found"));
    }

    // Delete
    @DeleteMapping("/{id}")
    public String deleteRent(@PathVariable Long id) {
        rentRepository.deleteById(id);
        return "Rent deleted successfully!";
    }
}
