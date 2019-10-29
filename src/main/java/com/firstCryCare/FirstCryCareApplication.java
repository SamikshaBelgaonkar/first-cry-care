package com.firstCryCare;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.firstCryCare.Repository.FirstCryCareRepository;
import com.firstCryCare.model.FirstCry;


@SpringBootApplication
public class FirstCryCareApplication  implements CommandLineRunner  {
 
	@Autowired
	private FirstCryCareRepository firstCryRepo;	
	public static void main(String[] args) {
		SpringApplication.run(FirstCryCareApplication.class, args);
	}
	
@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		firstCryRepo.save(new FirstCry("1", "Samiksha","Analysis","Female"));
		firstCryRepo.save(new FirstCry("2", "Padmaraj","Analysis","Female"));
		firstCryRepo.save(new FirstCry("3", "Atharva","Analysis","Female"));
		firstCryRepo.save(new FirstCry("4", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("5", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("6", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("7", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("8", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("9", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("10", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("11", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("12", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("13", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("14", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("15", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("16", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("17", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("18", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("19", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("20", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("21", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("22", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("23", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("24", "Vedant","Analysis","Female"));
		firstCryRepo.save(new FirstCry("25", "Vedant","Analysis","Female"));

}
}