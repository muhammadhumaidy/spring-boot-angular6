package com.ridwan.testati.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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
public class Division {

	@Id
	@GeneratedValue(generator="division_seq")
	@GenericGenerator(strategy="sequence", name="division_seq", parameters= {
			@Parameter(name=SequenceStyleGenerator.SEQUENCE_PARAM, value="division_seq"),
			@Parameter(name="initial_value", value="1"),
			@Parameter(name="increment_size", value="1"),
			@Parameter(name="optimizer", value="pooled"),
	})
	private int id;
	private String name;
}
