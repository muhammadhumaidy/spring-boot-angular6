package com.ridwan.testati.service;

import java.util.List;

import com.ridwan.testati.dto.DivisionDTO;
import com.ridwan.testati.dto.EmployeeDTO;
import com.ridwan.testati.dto.PositionDTO;

public interface IMainService {
	
	List<PositionDTO> getAllPotitions();

	PositionDTO getPositionById(Integer id);
	
	List<DivisionDTO> getAllDivisions();
	
	List<EmployeeDTO> getAllEmployees();
	
	EmployeeDTO getEmployeeById(int id);

	int getEmployeeCurrentSequence();
	
	EmployeeDTO saveEmployee(EmployeeDTO employeeDTO);
	
	void deleteEmployee(int id);
}
