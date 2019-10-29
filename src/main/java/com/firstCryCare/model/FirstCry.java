package com.firstCryCare.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class FirstCry {
	@Id
//	@GeneratedValue
	String  id;
	String name, meaning, sex;
	
	public FirstCry() {
			}
	public FirstCry(String id,String name, String meaning, String sex) {
		this.id = id;
		this.name = name;
		this.meaning = meaning;
		this.sex = sex;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMeaning() {
		return meaning;
	}
	public void setMeaning(String meaning) {
		this.meaning = meaning;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	
}
