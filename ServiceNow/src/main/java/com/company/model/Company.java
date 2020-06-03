package com.company.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Company {
	
	@Id
	@Column(name="company_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long companyId;
	
	@Column(name = "company_id", unique=true, nullable = false)
	private String companyName;
	
	public Company() {
		
	}

	public Company(String companyName) {
		super();
		this.companyName = companyName;
	}

	public long getCompanyId() {
		return companyId;
	}

	public void setCompanyId(long companyId) {
		this.companyId = companyId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	@Override
	public String toString() {
		return "Company [companyId=" + companyId + ", companyName=" + companyName + "]";
	}
	
	
	
	
	
	

}
