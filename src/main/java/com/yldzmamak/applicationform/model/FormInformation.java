package com.yldzmamak.applicationform.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
public class FormInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String fullName;
    private String tcNo;
    private String address;
    private String telNo;
    private String eMail;
    private Date birthday;
    private String question1;
    private String question2;
    private String question3;
    private String question4;
    private String question5;

    //deneme
}
