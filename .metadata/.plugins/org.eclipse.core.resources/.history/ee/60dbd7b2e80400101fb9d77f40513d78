package com.food.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.food.model.Restaurant;
import com.food.model.User;
import com.food.request.CreateRestaurantRequest;

 
public interface RestaurantService {

	public Restaurant createRestaurant(CreateRestaurantRequest req, User user); 
	
	public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updatedRequest) throws Exception;
	
	public void deleteRestaurant(Long rstaurantId) throws Exception;
	
	public List<Restaurant> getAllRestaurant();
	
	public List<Restaurant> searchRestaurant();
	
	public Restaurant findRestaurantById(Long id) throws Exception;
	
	
}
