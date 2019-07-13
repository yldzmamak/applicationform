package com.yldzmamak.applicationform.dto;

import lombok.Data;

import java.util.Date;

@Data
public class FormInformationDto {
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
}
