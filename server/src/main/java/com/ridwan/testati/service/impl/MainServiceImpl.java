package com.ridwan.testati.service.impl;

import java.util.List;
import java.util.Optional;

import com.ridwan.testati.domain.Position;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;

import com.ridwan.testati.domain.Employee;
import com.ridwan.testati.dto.DivisionDTO;
import com.ridwan.testati.dto.EmployeeDTO;
import com.ridwan.testati.dto.PositionDTO;
import com.ridwan.testati.repository.DivisionRepository;
import com.ridwan.testati.repository.EmployeeRepository;
import com.ridwan.testati.repository.PotitionRepository;
import com.ridwan.testati.service.IMainService;

@Service
public class MainServiceImpl implements IMainService{

	private static final ModelMapper mapper = new ModelMapper();
	private PotitionRepository positionRepository;
	private DivisionRepository divisionRepository;
	private EmployeeRepository employeeRepository;

	MainServiceImpl(PotitionRepository positionRepository, DivisionRepository divisionRepository, EmployeeRepository employeeRepository){
		this.positionRepository = positionRepository;
		this.divisionRepository = divisionRepository;
		this.employeeRepository = employeeRepository;
	}
	
	public List<PositionDTO> getAllPotitions(){
		return mapper.map(positionRepository.findAll(),
				new TypeToken<List<PositionDTO>>() {}.getType());
	}

	public PositionDTO getPositionById(Integer id){
		Optional<Position> optPosition = positionRepository.findById(id);
		Position position = new Position();
		if(optPosition.isPresent()) {
			position = optPosition.get();
		}
		return mapper.map(position,
				new TypeToken<PositionDTO>() {}.getType());
	}

	public List<DivisionDTO> getAllDivisions(){
		return mapper.map(divisionRepository.findAll(), 
				new TypeToken<List<DivisionDTO>>() {}.getType());
	}
	
	public List<EmployeeDTO> getAllEmployees(){
		return mapper.map(employeeRepository.findAll(), 
				new TypeToken<List<EmployeeDTO>>() {}.getType());
	}
	
	public EmployeeDTO getEmployeeById(int id) {
		Optional<Employee> optEmployee = employeeRepository.findById(id);
		Employee employee = new Employee();
		if(optEmployee.isPresent()) {
			employee = optEmployee.get();
		}
		return mapper.map(employee, 
				new TypeToken<EmployeeDTO>() {}.getType());
	}

	public int getEmployeeCurrentSequence(){
		return employeeRepository.getEmployeeSequenceCurrentValue();
	}
	
	public EmployeeDTO saveEmployee(EmployeeDTO employeeDTO) {
		return mapper.map(employeeRepository.save( 
				mapper.map(employeeDTO, 
						new TypeToken<Employee>() {}.getType())), 
				new TypeToken<EmployeeDTO>() {}.getType());
	}
	
	public void deleteEmployee(int id) {
		employeeRepository.deleteById(id);
	}
}
