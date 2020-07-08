package com.ridwan.testati.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ridwan.testati.domain.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer>{

    @Query(value = "select EMPLOYEE_SEQ.currval" ,nativeQuery = true )
    int getEmployeeSequenceCurrentValue();
}
