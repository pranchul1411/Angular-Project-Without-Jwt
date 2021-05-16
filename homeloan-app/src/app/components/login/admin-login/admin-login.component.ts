import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  username:string = '';
  password:string = '';

  constructor(private adminService: AdminService,private loginService: LoginService) { }

  ngOnInit(): void {
  }

  save():void {
    this.adminService.adminLogin(this.username,this.password).subscribe(
      result=>{
        if(result){
          this.loginService.loginAdmin();
          localStorage.setItem('username',this.username);
          window.location.href="/admin";
        }
        else{
          alert("Invalid Credintails !!!! \nPlease Enter correct UserName and Password");
          window.location.href="/adminLogin";
        }
      },
      error=>{
        console.log('error: ',error);
      }
    )
  }

}
