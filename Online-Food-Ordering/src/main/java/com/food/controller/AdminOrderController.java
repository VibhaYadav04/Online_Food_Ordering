package com.food.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.food.model.Order;
import com.food.model.User;
import com.food.service.OrderService;
import com.food.service.UserService;

@RestController
@RequestMapping("/api/admin")
public class AdminOrderController {
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private UserService userService;
	
	
	// GET ORDER HISTORY OF ANY RESTUARANT
		@GetMapping("/order/restaurant/{id}")
		public ResponseEntity<List<Order>> getOrderHistory(
				@PathVariable Long id, 
				@RequestParam (required = false) String order_status,
			    @RequestHeader("Authorization") String jwt) throws Exception{
			User user = userService.findUserbyJwtToken(jwt);
			List<Order> orders = orderService.getRestaurantOrder(id, order_status);
			return new ResponseEntity<>(orders, HttpStatus.OK);
		}

		// UPDATE ORDER OF ANY PARTICULAR ORDER
		@PutMapping("/order/{orderId}/{orderStatus}")
		public ResponseEntity<Order> updateOrderStatus(
				@PathVariable Long orderId, 
				@PathVariable String orderStatus,
				@RequestHeader("Authorization") String jwt) throws Exception{
			User user = userService.findUserbyJwtToken(jwt);
			Order order = orderService.updateOrder(orderId, orderStatus);
			return new ResponseEntity<>(order, HttpStatus.OK);
		}
}
