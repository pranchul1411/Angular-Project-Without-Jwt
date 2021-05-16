import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loginCustomer() {
    localStorage.setItem('login', 'customer');
  }

  loginAdmin() {
    localStorage.setItem('login', 'admin');
  }

  loginFinanceOfficer() {
    localStorage.setItem('login', 'financeOfficer');
  }

  loginLandOfficer() {
    localStorage.setItem('login', 'landOfficer');
  }

  isCustomerLoggedIn(): boolean {
    if (localStorage.getItem('login') == 'customer')
      return true;
    else
      return false;
  }

  isAdminLoggedIn(): boolean {
    if (localStorage.getItem('login') == 'admin')
      return true;
    else
      return false;
  }

  isFinanceOfficerLoggedIn(): boolean {
    if (localStorage.getItem('login') == 'financeOfficer')
      return true;
    else
      return false;
  }

  isLandOfficerLoggedIn(): boolean {
    if (localStorage.getItem('login') == 'landOfficer')
      return true;
    else
      return false;
  }

  logout() {
    localStorage.removeItem('login')
    localStorage.removeItem('username');
  }

}
