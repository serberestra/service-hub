package company.com.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.company.model.Company;

@Repository("companyRepo")
public class CompanyRepo {
	
	private SessionFactory sesFact;
	
	@Autowired
	public CompanyRepo(SessionFactory sesFact) {
		this.sesFact = sesFact;
	}
	
	public List<Company> selectAll() {
		Session  ses = sesFact.openSession();
		Transaction tx = ses.beginTransaction();
		
		List<Company> compList = ses.createQuery("from Company", Company.class).list();
		
		ses.close();
		
		return compList;
		
	}

	
	public void insert(Company c) {
		Session  ses = sesFact.openSession();
		Transaction tx = ses.beginTransaction();
		
		ses.save(c);
		
		tx.commit();
		
		
	}
	
	public void delete(Company c) {
		Session  ses = sesFact.openSession();
		Transaction tx = ses.beginTransaction();
		
		ses.delete(c);
		
		tx.commit();
		
	
	}


}
