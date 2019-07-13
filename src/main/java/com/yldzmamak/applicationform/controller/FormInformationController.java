package com.yldzmamak.applicationform.controller;

import com.yldzmamak.applicationform.dto.FormInformationDto;
import com.yldzmamak.applicationform.service.base.FormInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/forminformations")
public class FormInformationController {

    @Autowired
    private FormInformationService formInformationService;

    @ResponseBody
    @GetMapping
    public List<FormInformationDto> findAll(){
        return formInformationService.findAll();
    }

    @ResponseBody
    @PostMapping
    public FormInformationDto save(@RequestBody FormInformationDto formInformationDto) {
        return formInformationService.save(formInformationDto);
    }
}
