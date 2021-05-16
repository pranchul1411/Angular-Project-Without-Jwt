import { Component, OnInit } from '@angular/core';
import { LandOfficerService } from 'src/app/services/land-officer/land-officer.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-land-officer-login',
  templateUrl: './land-officer-login.component.html',
  styleUrls: ['./land-officer-login.component.css']
})
export class LandOfficerLoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private landOfficerService: LandOfficerService, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  save(): void {
    this.landOfficerService.landOfficerLogin(this.username, this.password).subscribe(
      result => {
        if (result) {
          this.loginService.loginLandOfficer();
          localStorage.setItem('username', this.username);
          window.location.href = "/landOfficer";
        }
        else {
          alert("Invalid Credintails !!!! \n Please Enter correct UserName and Password");
          window.location.href = "/landOfficerLogin";
        }
      },
      error => {
        console.log('error: ', error);
      }
    )
  }

}
