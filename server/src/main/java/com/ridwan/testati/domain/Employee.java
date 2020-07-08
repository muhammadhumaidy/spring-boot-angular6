package com.ridwan.testati.domain;

import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;
import org.hibernate.id.enhanced.SequenceStyleGenerator;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

	@Id
	@GeneratedValue(generator="employee_seq")
	@GenericGenerator(strategy="sequence", name="employee_seq", parameters= {
			@Parameter(name=SequenceStyleGenerator.SEQUENCE_PARAM, value="employee_seq"),
			@Parameter(name="initial_value", value="1"),
			@Parameter(name="increment_size", value="1"),
			@Parameter(name="optimizer", value="pooled"),
	})
	private int id;
	private String nik;
	private String name;
	private String type;
	@OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "positionId")
	private Position position;
	@OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "divisionId")
	private Division division;
	private String lastPosition;
	private Instant createdDate;
}
