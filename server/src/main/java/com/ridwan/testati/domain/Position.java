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
public class Position {

	@Id
	@GeneratedValue(generator="seq")
	@GenericGenerator(strategy="sequence", name="seq", parameters= {
			@Parameter(name=SequenceStyleGenerator.SEQUENCE_PARAM, value="position_seq"),
			@Parameter(name="initial_value", value="1"),
			@Parameter(name="increment_size", value="1"),
			@Parameter(name="optimizer", value="pooled"),
	})
	private int id;
	private String name;
	private int level;
}
