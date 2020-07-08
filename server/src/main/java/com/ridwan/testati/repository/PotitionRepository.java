package com.ridwan.testati.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ridwan.testati.domain.Position;

@Repository
public interface PotitionRepository extends JpaRepository<Position, Integer>{

}
