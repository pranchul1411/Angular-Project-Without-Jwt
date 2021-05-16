import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  username:string = '';
  password:string = '';

  constructor(private customerService: CustomerService, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  save():void {
    this.customerService.customerLogin(this.username,this.password).subscribe(
      result=>{
        if(result){
          this.loginService.loginCustomer();
          localStorage.setItem('username',this.username);
          window.location.href="/customer/home";
        }
        else{
          alert("Invalid Credintails !!!! \nPlease Enter correct Username and Password");
          window.location.href="/customerLogin";
        }
      },
      error=>{
        console.log('error: ',error);
      }
    )
  }

}
