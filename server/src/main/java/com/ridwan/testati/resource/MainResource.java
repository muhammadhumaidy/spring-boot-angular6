package com.ridwan.testati.resource;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ridwan.testati.dto.DivisionDTO;
import com.ridwan.testati.dto.EmployeeDTO;
import com.ridwan.testati.dto.PositionDTO;
import com.ridwan.testati.service.IMainService;

@RestController
@RequestMapping("/main")
public class MainResource {
	
	private IMainService mainService;
	
	MainResource(IMainService mainService){
		this.mainService = mainService;
	}
	
	@GetMapping("/positions")
	@CrossOrigin(origins = "http://localhost:8080")
	public ResponseEntity<List<PositionDTO>> getAllPotitions() {
		return new ResponseEntity<>(mainService.getAllPotitions(),HttpStatus.OK);
	}

	@GetMapping("/positions/{id}")
	@CrossOrigin(origins = "http://localhost:8080")
	public ResponseEntity<PositionDTO> getPositionById(@PathVariable Integer id) {
		return new ResponseEntity<>(mainService.getPositionById(id),HttpStatus.OK);
	}
	
	@GetMapping("/divisions")
	@CrossOrigin(origins = "http://localhost:8080")
	public ResponseEntity<List<DivisionDTO>> getAllDivisions() {
		return new ResponseEntity<>(mainService.getAllDivisions(),HttpStatus.OK);
	}
	
	@GetMapping("/employees")
	@CrossOrigin(origins = "http://localhost:8080")
	public ResponseEntity<List<EmployeeDTO>> getAllEmployees() {
		return new ResponseEntity<>(mainService.getAllEmployees(),HttpStatus.OK);
	}
	
	@GetMapping("/employees/{id}")
	@CrossOrigin(origins = "http://localhost:8080")
	public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable Integer id) {
		return new ResponseEntity<>(mainService.getEmployeeById(id),HttpStatus.OK);
	}
	
	@PostMapping("/employees")
	@CrossOrigin(origins = "http://localhost:8080")
	public ResponseEntity<EmployeeDTO> saveEmployee(@RequestBody EmployeeDTO employeeDTO) {
		return new ResponseEntity<>(mainService.saveEmployee(employeeDTO),HttpStatus.OK);
	}
	
	@DeleteMapping("/employees/{id}")
	@CrossOrigin(origins = "http://localhost:8080")
	public ResponseEntity<Object> deleteEmployee(@PathVariable int id) {
		mainService.deleteEmployee(id);
		return new ResponseEntity<>(null,HttpStatus.OK);
	}

	@GetMapping("/employee-sequence")
	@CrossOrigin(origins = "http://localhost:8080")
	public ResponseEntity<Integer> getEmployeeCurrentSequence() {
		return new ResponseEntity<>(mainService.getEmployeeCurrentSequence(),HttpStatus.OK);
	}
}
