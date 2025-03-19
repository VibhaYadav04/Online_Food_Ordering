package com.food.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.food.model.User;
import java.util.List;


public interface UserRepository extends JpaRepository<User, Long> { // Name of Enity, Data type of Primary Key

	public User findByEmail(String username);
}
