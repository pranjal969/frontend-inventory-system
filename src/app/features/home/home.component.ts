import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:any;
  constructor( private login: LoginServiceService, private router: Router) { }
  ngOnInit(): void {

   this.username= this.login.getUser();
  }


}
