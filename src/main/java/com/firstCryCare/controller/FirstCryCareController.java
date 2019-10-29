package com.firstCryCare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.firstCryCare.Repository.FirstCryCareRepository;
import com.firstCryCare.model.FirstCry;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
@RequestMapping(path="/api" )
public class FirstCryCareController {

	@Autowired
	private FirstCryCareRepository firstCryRepo;
	
	@GetMapping("/names")
	public List<FirstCry> getAllNames(){
		return firstCryRepo.findAll();
	}
//	@GetMapping("/names/{religion}")
//	public FirstCry getStudentById(@PathVariable String religion)
//	{
//		return firstCryRepo.find
//	}
	
}
