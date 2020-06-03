package com.example.ServiceNow;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import company.com.dao.CompanyRepo;

public class MainDriver {
	
	public static ApplicationContext appContext = new ClassPathXmlApplicationContext("applicationContext.xml");
	
	public static CompanyRepo companyRepo = appContext.getBean("companyRepo", CompanyRepo.class);
	
	public static void main(String[] args) {
		
	}

}
