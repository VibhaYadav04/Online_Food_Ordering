package com.food.config;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import jakarta.servlet.http.HttpServletRequest;

@Configuration
@EnableWebSecurity
public class AppConfig {

	
	@Bean //signals to Spring that the method returns an object that should be registered as a bean in the application context. 
	SecurityFilterChain securityFilterChain (HttpSecurity http) throws Exception{
		
		http.sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
		    .authorizeHttpRequests(Authorize -> Authorize
		    		.requestMatchers("/api/admin/**").hasAnyRole("RESTAURANT_OWNER", "ADMIN")
		    		.requestMatchers("/api/**").authenticated()
		    		.anyRequest().permitAll()
		    		)
		    .addFilterBefore(new JwtTokenValidator(), BasicAuthenticationFilter.class)
		    .csrf(csrf-> csrf.disable())
		    .cors(cors->cors.configurationSource(corsConfigurationSource()));
		
		return http.build();
	}

	private CorsConfigurationSource corsConfigurationSource(){
		return new CorsConfigurationSource() {
			
			@Override
			public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
			    CorsConfiguration cfg = new CorsConfiguration();
			    
			    //allow the links to access from frontend
			    cfg.setAllowedOrigins(Arrays.asList(
			    		//"http://vibha-food.vercel.app//"
			    		"http://localhost:3000"
			    ));
			    
			    // allow the methods to be accessed
			    cfg.setAllowedMethods(Collections.singletonList("*"));
			    
			    cfg.setAllowCredentials(true);
			    cfg.setAllowedHeaders(Collections.singletonList("*"));
			    cfg.setExposedHeaders(Arrays.asList("Authorization"));
				cfg.setMaxAge(3600L);
			    
			  return  cfg;
			}
		}; 
		
	}
	
	// change the password to encrypted text so that no one can't see it
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	
}
