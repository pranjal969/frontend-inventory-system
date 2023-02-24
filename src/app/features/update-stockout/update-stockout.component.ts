import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { LoginServiceService } from 'src/app/services/login.service.service';
import { MaterialService } from 'src/app/services/material.service';
import { StockinService } from 'src/app/services/stockin.service';
import { StockoutService } from 'src/app/services/stockout.service';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-stockout',
  templateUrl: './update-stockout.component.html',
  styleUrls: ['./update-stockout.component.css']
})
export class UpdateStockoutComponent implements OnInit {
  category:any=[];
  material:any=[];
  vendor:any=[];
  stockout:any=[];
  stockoutId=0;
  constructor(private _stockout:StockoutService,private router:Router, private _route: ActivatedRoute,private _category: InventoryService,private _material: MaterialService,private _login:LoginServiceService,private _vendor:VendorService) { }
  ngOnInit(): void {


    this.stockoutId=  this._route.snapshot.params['stockoutId'];
    this._stockout.getStockoutById(this.stockoutId).subscribe(
      (data: any) => {
        this.stockout=data;
        console.log(this.stockout);
        this.stockout.last_Modified_by=this._login.getUser();
  
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Stock not found !! Try again !!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        console.log(error);
        this.router.navigate(['/dashboard/stockout/'])
      }
    )


    this._category.categories().subscribe((data:any)=>{
      //success
      this.category=data;
      
      this.stockout.last_Modified_by=this._login.getUser();
      console.log(this.stockout);

    }, (error)=>{
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong try again !!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      console.log(error)
    }
    )

    this._material.material().subscribe((data:any)=>{
      //success
      this.material=data;
      
      console.log(this.material);

    }, (error)=>{
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong try again !!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      console.log(error)
    }
    )


  
    this._vendor.getAllVendor().subscribe((data:any)=>{
      //success
      this.vendor=data;
      
      console.log(this.vendor);

    }, (error)=>{
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

  formSubmit(){

    console.log("hi button clicked")
   


    this._stockout.updateStockout(this.stockout).subscribe(
      (data: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Stock updated successfully !!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigate(['/dashboard/stockout/'])
    
        
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Unable to add data something went wrong !!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        console.log(error);
      }
    )
  }

}