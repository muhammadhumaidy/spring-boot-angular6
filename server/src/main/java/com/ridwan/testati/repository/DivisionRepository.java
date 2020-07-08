package com.ridwan.testati.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ridwan.testati.domain.Division;

@Repository
public interface DivisionRepository extends JpaRepository<Division, Integer>{

}
