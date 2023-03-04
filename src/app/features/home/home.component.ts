import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login.service.service';
import { StockinService } from 'src/app/services/stockin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: any;
  raw_materials: any = [];
  consumables: any = [];
  assets: any = [];
  stationary: any = [];
  constructor(private login: LoginServiceService, private router: Router, private _totalstockin: StockinService) { }
  ngOnInit(): void {

    this.username = this.login.getUser();
    this._totalstockin.getTotalStockIn().subscribe((data: any) => {

      // this.raw_materials=data;
      this.raw_materials = data.filter((temp: any) => temp.categoriesName == "Raw");
      this.consumables = data.filter((temp: any) => temp.categoriesName == "Consumable");
      this.assets = data.filter((temp: any) => temp.categoriesName == "Assets");
      this.stationary = data.filter((temp: any) => temp.categoriesName == "Stationary");

      console.log(this.raw_materials);

    }, (error) => {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong try again !!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      console.log(error)
    }
    )


  }


}
