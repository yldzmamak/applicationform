package com.yldzmamak.applicationform.mapper;

import com.yldzmamak.applicationform.dto.FormInformationDto;
import com.yldzmamak.applicationform.model.FormInformation;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Named;

import java.util.List;

@Mapper(componentModel = "spring")
public interface FormInformationMapper {
    @Named("toFormInformation")
    FormInformation toFormInformation(FormInformationDto formInformationDto);

    @Named("toFormInformationDto")
    FormInformationDto toFormInformationDto(FormInformation formInformation);

    @IterableMapping(qualifiedByName = "toFormInformation")
    List<FormInformation> toFormInformationList(List<FormInformationDto> formInformationDtoList);

    @IterableMapping(qualifiedByName = "toFormInformationDto")
    List<FormInformationDto> toFormInformationDtoList(List<FormInformation> formInformationList);
}
