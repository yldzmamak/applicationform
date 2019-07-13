package com.yldzmamak.applicationform.repository;


import com.yldzmamak.applicationform.model.FormInformation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormInformationRepository extends JpaRepository<FormInformation,Integer> {

}
