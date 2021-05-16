package com.cg.homeloan.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.homeloan.entities.LoanApplication;
import com.cg.homeloan.exceptions.LandVerificationException;
import com.cg.homeloan.exceptions.LoanApplicationNotFoundException;
import com.cg.homeloan.services.ILoanApplicationService;
import com.cg.homeloan.services.LandVerificationService;

@RestController
@RequestMapping("/homeloan/landOfficer")
@CrossOrigin(origins = "*")
public class LandVerificationOfficerController {

	@Autowired
	LandVerificationService landVerificationService;
	
	@Autowired
	ILoanApplicationService loanApplicationService;

	@GetMapping("/LoanApplications")
	public ResponseEntity<List<LoanApplication>> getAllLoanApplications() {
		return new ResponseEntity<>(loanApplicationService.getAllLoanApplication(), HttpStatus.OK);
	}
	
	@PutMapping("/updateLandVerificationStatus/{loanApplicationId}")
	public ResponseEntity<LoanApplication> updateLandStatus(@PathVariable int loanApplicationId) throws LandVerificationException, LoanApplicationNotFoundException {
		return new ResponseEntity<>(loanApplicationService.updateLandStatus(loanApplicationId), HttpStatus.OK);

	}
	
	//Validating the user	
	@GetMapping("/validatingLandOfficer/{username}/{password}")
	public ResponseEntity<Boolean> isValidLandOfficer(@PathVariable String username,@PathVariable String password) {
		return new ResponseEntity<>(landVerificationService.isValidLandOfficer(username, password),HttpStatus.OK);
	}

}
