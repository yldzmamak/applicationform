package com.yldzmamak.applicationform.service;

import com.yldzmamak.applicationform.dto.FormInformationDto;
import com.yldzmamak.applicationform.mapper.FormInformationMapper;
import com.yldzmamak.applicationform.repository.FormInformationRepository;
import com.yldzmamak.applicationform.service.base.FormInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormInformationServiceImpl implements FormInformationService {

    @Autowired
    private FormInformationRepository formInformationRepository;

    @Autowired
    private FormInformationMapper formInformationMapper;

    @Override
    public FormInformationDto save(FormInformationDto formInformationDto) {
        return formInformationMapper.toFormInformationDto(formInformationRepository.save(formInformationMapper.toFormInformation(formInformationDto)));
    }

    @Override
    public List<FormInformationDto> findAll() {
        List<FormInformationDto> formInformationDtoList = formInformationMapper.toFormInformationDtoList(formInformationRepository.findAll());
        if(formInformationDtoList.size()==0){
            throw new IllegalArgumentException("Herhangi bir form kayıtlı değil.");
        }
        return formInformationDtoList;
    }
}
