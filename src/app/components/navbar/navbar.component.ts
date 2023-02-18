import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login.service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isloggedIn = false;
   user:any = null;
   
  constructor(public login: LoginServiceService, private router: Router) { }

  ngOnInit(): void {
    this.isloggedIn = this.login.isloggedIn();
    this.user = this.login.getUser();
    
  }
  public logout() {
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout !!',
      icon: 'warning',
      confirmButtonText: 'Yes !',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        //logout
       
        this.login.logout();
        this.isloggedIn = false;
        this.user = null;
        Swal.fire({
          title: 'Logout Successfull',
          text: 'Thank you !!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        // window.location.href='/';
        this.router.navigate([''])
      }
      
    })
  }
}






