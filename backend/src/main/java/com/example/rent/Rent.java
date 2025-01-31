package com.example.rent;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "rents")
public class Rent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate t_date;
    private LocalDate f_date;
    private double tariff;
    private double tax;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public LocalDate getT_date() { return t_date; }
    public void setT_date(LocalDate t_date) { this.t_date = t_date; }
    public LocalDate getF_date() { return f_date; }
    public void setF_date(LocalDate f_date) { this.f_date = f_date; }
    public double getTariff() { return tariff; }
    public void setTariff(double tariff) { this.tariff = tariff; }
    public double getTax() { return tax; }
    public void setTax(double tax) { this.tax = tax; }
}

