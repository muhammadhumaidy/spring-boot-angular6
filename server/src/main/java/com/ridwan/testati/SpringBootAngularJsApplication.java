package com.ridwan.testati;

import java.time.Instant;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

import com.ridwan.testati.domain.Division;
import com.ridwan.testati.domain.Employee;
import com.ridwan.testati.domain.Position;
import com.ridwan.testati.enumeration.StatusType;
import com.ridwan.testati.repository.DivisionRepository;
import com.ridwan.testati.repository.EmployeeRepository;
import com.ridwan.testati.repository.PotitionRepository;

@SpringBootApplication
public class SpringBootAngularJsApplication{

	public static void main(String[] args) {
		SpringApplication.run(SpringBootAngularJsApplication.class, args);
	}
	
	@Bean
	ApplicationRunner divisionInit(DivisionRepository repository) {

		List<Division> divisions =
			    Arrays.asList(
			    		new Division(1,"IT"),
			    		new Division(2,"HRD"),
			    		new Division(3,"Loading"),
			    		new Division(4,"Ticketing")
			    		);
		return args -> Stream.of(divisions).forEach(division -> repository.saveAll(division));
	}

	@Bean
	ApplicationRunner PotitionInit(PotitionRepository repository) {
		List<Position> potitions =
			    Arrays.asList(
			    		new Position(1,"Staff",1),
			    		new Position(2,"Supervisor",2),
			    		new Position(3,"Asisten Manager",3),
			    		new Position(4,"Manager",4)
			    		);
		return args -> Stream.of(potitions).forEach(potition -> repository.saveAll(potition));
	}
	
	@Bean
	ApplicationRunner EmployeeInit(EmployeeRepository repository) {
		List<Employee> employees =
			    Arrays.asList(
			    		new Employee(1,"EM00001","John",StatusType.PROMOTION.getStrValue(),new Position(1,"Staff",1),new Division(4,"Ticketing"),"Staff",Instant.now()),
			    		new Employee(2,"EM00002","Matt",StatusType.PROMOTION.getStrValue(),new Position(2,"Supervisor",2),new Division(3,"Loading"),"Supervisor",Instant.now()),
			    		new Employee(3,"EM00003","Doe",StatusType.PROMOTION.getStrValue(),new Position(3,"Asisten Manager",3),new Division(2,"HRD"),"Asisten Manager",Instant.now()),
			    		new Employee(4,"EM00004","Smith",StatusType.PROMOTION.getStrValue(),new Position(4,"Manager",4),new Division(1,"IT"),"Manager",Instant.now()),
			    		new Employee(5,"EM00005","Lisa",StatusType.PROMOTION.getStrValue(),new Position(1,"Staff",1),new Division(4,"Ticketing"),"Staff",Instant.now()),
			    		new Employee(6,"EM00006","Emma",StatusType.PROMOTION.getStrValue(),new Position(2,"Supervisor",2),new Division(3,"Loading"),"Supervisor",Instant.now()),
			    		new Employee(7,"EM00007","Jack",StatusType.PROMOTION.getStrValue(),new Position(3,"Asisten Manager",3),new Division(2,"HRD"),"Asisten Manager",Instant.now()),
			    		new Employee(8,"EM00008","Kira",StatusType.PROMOTION.getStrValue(),new Position(4,"Manager",4),new Division(1,"IT"),"Manager",Instant.now()),
			    		new Employee(9,"EM00009","Rick",StatusType.PROMOTION.getStrValue(),new Position(1,"Staff",1),new Division(4,"Ticketing"),"Staff",Instant.now()),
			    		new Employee(10,"EM00010","Lucy",StatusType.PROMOTION.getStrValue(),new Position(2,"Supervisor",2),new Division(3,"Loading"),"Supervisor",Instant.now()),
			    		new Employee(11,"EM00011","Amora",StatusType.PROMOTION.getStrValue(),new Position(3,"Asisten Manager",3),new Division(2,"HRD"),"Asisten Manager",Instant.now()),
			    		new Employee(12,"EM00012","Ricky",StatusType.PROMOTION.getStrValue(),new Position(4,"Manager",4),new Division(1,"IT"),"Manager",Instant.now())
			    		
			    		);
		return args -> Stream.of(employees).forEach(employee -> repository.saveAll(employee));
	}
}