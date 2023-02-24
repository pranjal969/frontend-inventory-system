import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { LoginServiceService } from 'src/app/services/login.service.service';
import { MaterialService } from 'src/app/services/material.service';
import { ScrappingService } from 'src/app/services/scrapping.service';
import { StockinService } from 'src/app/services/stockin.service';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-scrapping',
  templateUrl: './update-scrapping.component.html',
  styleUrls: ['./update-scrapping.component.css']
})
export class UpdateScrappingComponent implements OnInit {
  category:any=[];
  material:any=[];
  vendor:any=[];
  stockin:any=[];
  scrapping:any=[];
  scrappingId=0;
  constructor(private _scrapping:ScrappingService,private _stockin:StockinService,private router:Router, private _route: ActivatedRoute,private _category: InventoryService,private _material: MaterialService,private _login:LoginServiceService,private _vendor:VendorService) { }
  ngOnInit(): void {


    this.scrappingId=  this._route.snapshot.params['scrappingId'];
    this._scrapping.getScrappingById(this.scrappingId).subscribe(
      (data: any) => {
        this.scrapping=data;
        console.log(this.scrapping);
        this.scrapping.last_Modified_by=this._login.getUser();
  
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Scrapping not found !! Try again !!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        console.log(error);
        this.router.navigate(['/dashboard/scrapping/'])
      }
    )


    this._category.categories().subscribe((data:any)=>{
      //success
      this.category=data;
      
      console.log(this.category);

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
   


    this._scrapping.updateScrapping(this.scrapping).subscribe(
      (data: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Scrapping updated successfully !!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigate(['/dashboard/scrapping/'])
    
        
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