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
    this.login.logout();
    this.isloggedIn = false;
    this.user = null;
    Swal.fire({
      title: 'Logout Successfull',
      text: 'Thank you visit again !!',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    this.router.navigate(['login'])
    window.location.reload();
  }
}






