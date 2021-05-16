import { Component, OnInit } from '@angular/core';
import { FinanceOfficerService } from 'src/app/services/finance-officer/finance-officer.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-finance-officer-login',
  templateUrl: './finance-officer-login.component.html',
  styleUrls: ['./finance-officer-login.component.css']
})
export class FinanceOfficerLoginComponent implements OnInit {
  username:string = '';
  password:string = '';

  constructor(private financeOfficerServic: FinanceOfficerService, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  save():void {
    this.financeOfficerServic.financeOfficerLogin(this.username,this.password).subscribe(
      result=>{
        if(result){
          this.loginService.loginFinanceOfficer();
          localStorage.setItem('username',this.username);
          window.location.href="/financeOfficer";
        }
        else{
          alert("Invalid Credintails !!!! \n Please Enter correct UserName and Password");
          window.location.href="/financeOfficerLogin";
        }
      },
      error=>{
        console.log('error: ',error);
      }
    )
  }

}
