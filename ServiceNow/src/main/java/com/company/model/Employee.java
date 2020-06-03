package com.company.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Employee {

	@Id
	@GeneratedValue
	private long empId;
	
	@Column(nullable = false)
	private String empName;
	
	@Column(nullable = false)
	private long serviceId;
	
	@Column(nullable = false)
	private long companyId;

	public Employee() {};
	
	public Employee(String empName, long serviceId, long companyId) {
		super();
		this.empName = empName;
		this.serviceId = serviceId;
		this.companyId = companyId;
	}

	public long getEmpId() {
		return empId;
	}

	public void setEmpId(long empId) {
		this.empId = empId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public long getServiceId() {
		return serviceId;
	}

	public void setServiceId(long serviceId) {
		this.serviceId = serviceId;
	}

	public long getCompanyId() {
		return companyId;
	}

	public void setCompanyId(long companyId) {
		this.companyId = companyId;
	}

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", empName=" + empName + ", serviceId=" + serviceId + ", companyId="
				+ companyId + "]";
	}
	
	
}
