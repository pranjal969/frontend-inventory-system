import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { LoginServiceService } from 'src/app/services/login.service.service';
import { MaterialService } from 'src/app/services/material.service';
import { StockinService } from 'src/app/services/stockin.service';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-stockin',
  templateUrl: './update-stockin.component.html',
  styleUrls: ['./update-stockin.component.css']
})
export class UpdateStockinComponent implements OnInit {
  category:any=[];
  material:any=[];
  vendor:any=[];
  stockin:any=[];
  stockinId=0;
  constructor(private _stockin:StockinService,private router:Router, private _route: ActivatedRoute,private _category: InventoryService,private _material: MaterialService,private _login:LoginServiceService,private _vendor:VendorService) { }
  ngOnInit(): void {


    this.stockinId=  this._route.snapshot.params['stockinId'];
    this._stockin.getStockinById(this.stockinId).subscribe(
      (data: any) => {
        this.stockin=data;
        console.log(this.stockin);
        this.stockin.last_Modified_by=this._login.getUser();
  
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Stock not found !! Try again !!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        console.log(error);
        this.router.navigate(['/dashboard/stockin/'])
      }
    )


    this._category.categories().subscribe((data:any)=>{
      //success
      this.category=data;
      
      this.stockin.last_Modified_by=this._login.getUser();
      console.log(this.stockin);

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
   


    this._stockin.updateStockIn(this.stockin).subscribe(
      (data: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Stock updated successfully !!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigate(['/dashboard/stockin/'])
    
        
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