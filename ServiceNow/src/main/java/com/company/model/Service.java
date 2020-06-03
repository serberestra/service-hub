package com.company.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Service {
	
	@Id
	@GeneratedValue
	private long serviceId;
	
	@Column(nullable = false)
	private String serviceName;

	public Service() {
		
	}
	
	public Service(String serviceName) {
		super();
		this.serviceName = serviceName;
	}

	public long getServiceId() {
		return serviceId;
	}

	public void setServiceId(long serviceId) {
		this.serviceId = serviceId;
	}

	public String getServiceName() {
		return serviceName;
	}

	public void setServiceName(String serviceName) {
		this.serviceName = serviceName;
	}

	@Override
	public String toString() {
		return "Service [serviceId=" + serviceId + ", serviceName=" + serviceName + "]";
	}
	

	
	
}
