package com.ridwan.testati.dto;

import java.time.Instant;

import com.ridwan.testati.enumeration.StatusType;
import lombok.Data;

@Data
public class EmployeeDTO {

	private Integer id;
	private String nik;
	private String name;
	private StatusType type;
	private Integer positionId;
	private Integer divisionId;
	private String lastPosition;
	private Instant createdDate = Instant.now();
	
}
