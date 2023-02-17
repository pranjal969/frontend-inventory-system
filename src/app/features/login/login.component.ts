import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login.service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  loginData = {
    username: 'drkapil',
    password: 'render123#'

  }
  constructor(private snackBar: MatSnackBar, private login: LoginServiceService, private router: Router) { }
  ngOnInit(): void {
  }
  formSubmit() {
    if (this.loginData.username.trim() == '' || this.loginData.username == null) {
      Swal.fire({
        title: 'Error!',
        text: 'Enter the username',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      Swal.fire({
        title: 'Error!',
        text: 'Enter the password without space',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }
    console.log("login button clicked")
    //login service

    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log("success");
         console.log(data);
       
        this.login.setUser(data.response.username);
        // console.log(this.login.getUser());
  
     if(this.login.getUser() == undefined || this.login.getUser() == '' || this.login.getUser() == null)
     {
      this.login.logout();
     }
     else{
   this.router.navigate(['dashboard'])
  
     }
   
   
       
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Invalid Details!! Try again',
          icon: 'error',
          confirmButtonText: 'Ok'
          
        })
        console.log("Error");
        console.log(error);
      }
   
    )
  }
}