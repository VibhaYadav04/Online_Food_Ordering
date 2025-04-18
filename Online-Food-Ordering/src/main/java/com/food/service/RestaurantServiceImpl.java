package com.food.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.dto.RestaurantDto;
import com.food.model.Address;
import com.food.model.Restaurant;
import com.food.model.User;
import com.food.repository.AddressRepository;
import com.food.repository.RestaurantRepository;
import com.food.repository.UserRepository;
import com.food.request.CreateRestaurantRequest;

@Service
public class RestaurantServiceImpl implements RestaurantService {

	@Autowired
	private RestaurantRepository restaurantRepository;
	
	@Autowired
	private AddressRepository addressReporitory;
	
	@Autowired
	private UserRepository userRepository;
	
	
	@Override
	public Restaurant createRestaurant(CreateRestaurantRequest req, User user) {
		
		Address address = addressReporitory.save(req.getAddress());
		
		Restaurant restaurant = new Restaurant();
		restaurant.setAddress(req.getAddress());
		restaurant.setContactInformation(req.getContactInformation());
		restaurant.setCuisineType(req.getCusineType());
		restaurant.setDescription(req.getDescription());
		restaurant.setImages(req.getImages());
		restaurant.setName(req.getName());
		restaurant.setOpeningHours(req.getOpeningHours());
		restaurant.setRegistrationDate(LocalDateTime.now());
		restaurant.setOwner(user);
		
		return restaurantRepository.save(restaurant);
	}

	@Override
	public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updatedRequest) throws Exception {
		
		Restaurant restaurant = findRestaurantById(restaurantId);
		
		if (restaurant.getCuisineType() != null) {
			restaurant.setCuisineType(updatedRequest.getCusineType());
		}
		
		if (restaurant.getDescription() != null) {
			restaurant.setDescription(updatedRequest.getDescription());
		}
		
		if (restaurant.getName() != null) {
			restaurant.setName(updatedRequest.getName());
		}
			
		
		return restaurantRepository.save(restaurant);
	}

	@Override
	public void deleteRestaurant(Long restaurantId) throws Exception {
		
		Restaurant restaurant = findRestaurantById(restaurantId);
		
		restaurantRepository.delete(restaurant);
	}

	@Override
	public List<Restaurant> getAllRestaurant() {
		return restaurantRepository.findAll();
	}

	@Override
	public List<Restaurant> searchRestaurant(String keyword) {
		return restaurantRepository.findBySearchQuery(keyword);
	}

	@Override
	public Restaurant findRestaurantById(Long id) throws Exception {
		Optional<Restaurant> opt = restaurantRepository.findById(id);
		
		if (opt.isEmpty()) {
			throw new Exception("Restaurant not found with id "+id);
		}
		return opt.get();
	}

	@Override
	public Restaurant getRestaurantByUserId(Long userId) throws Exception {
		Restaurant restaurant = restaurantRepository.findByOwnerId(userId);
		
		if (restaurant == null) {
			throw new Exception("Restaurant not fount with owner id "+userId);
		}
		return restaurant;
	}

	@Override
	public RestaurantDto addToFavorites(Long restaurantId, User user) throws Exception {
		
		Restaurant restaurant = findRestaurantById(restaurantId);
		
		RestaurantDto dto = new RestaurantDto();
		dto.setDescription(restaurant.getDescription());
		dto.setImages(restaurant.getImages());
		dto.setTitle(restaurant.getName());
		dto.setId(restaurantId);
		
		// First the restaurant is not favorite hence false 
		boolean isFavourited = false;
		List<RestaurantDto> favourites = user.getFavourites();
		for (RestaurantDto favourite : favourites) {
			if (favourite.getId().equals(restaurantId)) {
				isFavourited= true;
				break;
			}
		}
		
		// If the restaurant is already added to favorite the remove it, else add it
		if (isFavourited) {
			favourites.removeIf(favorite -> favorite.getId().equals(restaurantId));
		}
		else {
			favourites.add(dto);
		}
		
		userRepository.save(user);
		
		return dto;
	}

	@Override
	public Restaurant updateRestaurantStatus(Long id) throws Exception {
		Restaurant restaurant = findRestaurantById(id);
		
		restaurant.setOpen(!restaurant.isOpen());
		
		return restaurantRepository.save(restaurant);
	}

}
