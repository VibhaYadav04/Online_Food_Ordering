package com.food.service;

import java.util.List;

import com.food.model.IngredientCategory;
import com.food.model.IngredientsItem;

public interface IngredientsService {

	public IngredientCategory createIngredientCategory (String name, Long restaurantId) throws Exception;
	
	public IngredientCategory findIngredientCategoryById (Long id) throws Exception;
	
	public List<IngredientCategory> findIngridientCategoryByRestaurant(Long id) throws Exception;
	
	public IngredientsItem createIngredientItem (Long restaurantId, String ingredientName, Long categoryId) throws Exception;
	
	public List<IngredientsItem> findRestaurantsIngredients(Long restaurantId);
	
	public IngredientsItem updateStock(Long id) throws Exception;
}
