package com.food.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Food {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	private String name;
	
	private String description;
	
	private Long price;
	
	@ManyToOne
	private Category foodCategory;
	
	@Column(length = 1000)
	@ElementCollection // create separate table for images
	private List<String> images;
	
	private boolean available; // if food is available or not
	
	@ManyToOne
	private Restaurant restaurant; // which restaurant provide the food
	
	private boolean isVegetarian;
	
	private boolean isSeasonal;
	
	@ManyToMany
	private List<IngredientsItem> ingredients = new ArrayList<>();
	
	private Date creationDate;
}
