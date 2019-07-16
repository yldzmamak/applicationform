package com.yldzmamak.applicationform.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Date;

@Data
@Entity
public class FormInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotEmpty(message = "Ad-Soyad boş bırakılamaz.")
    private String fullName;

    @NotEmpty(message = "Tc no boş bırakılamaz.")
    @Size(min = 11, max = 11, message = "Tc numarası yalnızca 11 karakter olabilir.")
    private String tcNo;

    @NotEmpty(message = "Adres boş bırakılamaz.")
    private String address;

    @Size(min = 11, max = 11, message = "Telefon numarası yalnızca 11 karakter olabilir.")
    @NotEmpty(message = "Telefon numarası boş bırakılamaz.")
    private String telNo;

    @NotEmpty(message = "E-Mail boş bırakılamaz.")
    @Email(message = "Geçerli bir E-Mail giriniz.")
    private String eMail;

    @NotEmpty(message = "Doğum tarihi boş bırakılamaz.")
    private Date birthday;

    @NotEmpty(message = "Soru 1 boş bırakılamaz.")
    private String question1;

    @NotEmpty(message = "Soru 2 boş bırakılamaz.")
    private String question2;

    @NotEmpty(message = "Soru 3 boş bırakılamaz.")
    private String question3;

    @NotEmpty(message = "Soru 4 boş bırakılamaz.")
    private String question4;

    private String question5;
}
