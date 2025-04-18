package com.food.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.model.Cart;
import com.food.model.CartItem;
import com.food.model.Food;
import com.food.model.User;
import com.food.repository.CartItemRepository;
import com.food.repository.CartRepository;
import com.food.request.AddCartItemRequest;

@Service
public class CartServiceImpl implements CartService{

	
	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private CartItemRepository cartItemRepository; 
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private FoodService foodService;
	
	
	// ADDING ITEMS TO CART
	@Override
	public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception {
		User user = userService.findUserbyJwtToken(jwt);
		
		Food food = foodService.findFoodById(req.getFoodId());
		
		Cart cart = cartRepository.findByCustomerId(user.getId());
		
		for ( CartItem cartItem : cart.getItems()) {
			if (cartItem.getFood().equals(food)) {
				int newQuantity = cartItem.getQuantity()+req.getQuantity();
				return updateCartItemQuantity(cartItem.getId(), newQuantity);
			}
		}
		
		CartItem newCartItem = new CartItem();
		newCartItem.setFood(food);
		newCartItem.setCart(cart);
		newCartItem.setQuantity(req.getQuantity());
		newCartItem.setIngredients(req.getIngredients());
		newCartItem.setTotalPrice(req.getQuantity()*food.getPrice());
		
		CartItem savedCartItem = cartItemRepository.save(newCartItem);
		
		cart.getItems().add(savedCartItem);
		
		
		return savedCartItem;
	}

	// UPDATE CART
	@Override
	public CartItem updateCartItemQuantity(Long cartItemId, int quantity) throws Exception {
		 Optional<CartItem> cartItemOptional = cartItemRepository.findById(cartItemId);
		 
		 if (cartItemOptional.isEmpty()) {
			 throw new  Exception ("Cart item not found !! ");
		 }
		 
		 CartItem item = cartItemOptional.get();
		 item.setQuantity(quantity);
		 
		 // 100 * 5 = 500
		 item.setTotalPrice(item.getFood().getPrice()*quantity);
		 
		 return cartItemRepository.save(item);
		
	}
	
	
    // REMOVE ITEM FROM CART
	@Override
	public Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception {
      
		User user = userService.findUserbyJwtToken(jwt);
			
		Cart cart = cartRepository.findByCustomerId(user.getId());
		
		Optional<CartItem> cartItemOptional = cartItemRepository.findById(cartItemId);
		 
		 if (cartItemOptional.isEmpty()) {
			 throw new  Exception ("Cart item not found !! ");
		 }
		 
		 CartItem item = cartItemOptional.get();
		 cart.getItems().remove(item);
		
		return cartRepository.save(cart);
	}

	// CALCULATE TOTAL PRICE
	@Override
	public Long calculateCartTotals(Cart cart) throws Exception {
		Long total = 0L;
		for (CartItem cartitem : cart.getItems()) {
			total += cartitem.getFood().getPrice()*cartitem.getQuantity();
		}
		return total;
	}

	// FIND ITEM BY ID 
	@Override
	public Cart findCartById(Long id) throws Exception {
		Optional<Cart> optionalCart = cartRepository.findById(id);
		if (optionalCart.isEmpty()){
			throw new Exception ("Cart not found with Id "+id);
		}
		return optionalCart.get();
	}
		

	// FIND CART BY USER ID
	@Override
	public Cart findCartByUserId(Long userId) throws Exception {
		//User user = userService.findUserbyJwtToken(userId);
		Cart cart = cartRepository.findByCustomerId(userId);
		cart.setTotal(calculateCartTotals(cart));
		return cart;
	}
	
	// CLEAR ITEMS IN CART
	@Override
	public Cart clearCart(Long userId) throws Exception {
		
		//User user = userService.findUserbyJwtToken(jwt);
		
		Cart cart = findCartByUserId(userId);
		cart.getItems().clear();
		return cartRepository.save(cart);
	}

}
