package com.firstCryCare.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.firstCryCare.model.FirstCry;

public interface FirstCryCareRepository extends JpaRepository<FirstCry,Long> {

}
