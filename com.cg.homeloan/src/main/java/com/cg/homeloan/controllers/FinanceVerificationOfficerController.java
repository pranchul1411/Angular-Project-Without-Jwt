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
import com.cg.homeloan.exceptions.FinanceVerificationException;
import com.cg.homeloan.exceptions.LoanApplicationNotFoundException;
import com.cg.homeloan.services.FinanceVerificationService;
import com.cg.homeloan.services.ILoanApplicationService;

@RestController
@RequestMapping("/homeloan/financeOfficer")
@CrossOrigin(origins = "*")
public class FinanceVerificationOfficerController {
	
	@Autowired
	FinanceVerificationService financeVerificationService;
	
	@Autowired
	ILoanApplicationService loanApplicationService;
	
	@GetMapping("/LoanApplications")
	public ResponseEntity<List<LoanApplication>> getAllLoanApplications() {
		return new ResponseEntity<>(loanApplicationService.getAllLoanApplication(), HttpStatus.OK);
	}
	
	@PutMapping("/updateFinanceVerificationStatus/{loanApplicationId}")
	public ResponseEntity<LoanApplication> updateFinanceStatus(@PathVariable int loanApplicationId) throws FinanceVerificationException, LoanApplicationNotFoundException {
		return new ResponseEntity<>(loanApplicationService.updateFinanceStatus(loanApplicationId), HttpStatus.OK);

	}
	
	//Validating the user
	@GetMapping("/validatingFinanceOfficer/{username}/{password}")
	public ResponseEntity<Boolean> isValidFinanceOfficer(@PathVariable String username,@PathVariable String password) {
		return new ResponseEntity<>(financeVerificationService.isValidFinanceOfficer(username, password),HttpStatus.OK);
	}

}
