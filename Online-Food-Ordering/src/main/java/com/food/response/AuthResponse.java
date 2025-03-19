package com.food.response;

import com.food.model.USER_ROLE;

import lombok.Data;

@Data
public class AuthResponse {

	private String jwt;
	
	private String mesaage;
	
	private USER_ROLE role;
	
	
}
