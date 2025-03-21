package com.food.service;

import java.util.List;

import com.food.model.Category;

public interface CategoryService {

	public Category createCategory(String name, Long userid) throws Exception;
	
	public List<Category> findCategoryByRestaurantId(Long id) throws Exception;
	
	public Category findCategoryById(Long id) throws Exception;	
}
