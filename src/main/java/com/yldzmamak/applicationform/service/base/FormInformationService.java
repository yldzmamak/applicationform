package com.yldzmamak.applicationform.service.base;


import com.yldzmamak.applicationform.dto.FormInformationDto;

import java.util.List;

public interface FormInformationService {
    FormInformationDto save(FormInformationDto formInformationDto);
    List<FormInformationDto> findAll();
}
