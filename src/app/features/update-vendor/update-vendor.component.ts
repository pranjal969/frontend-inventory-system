import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { LoginServiceService } from 'src/app/services/login.service.service';
import { MaterialService } from 'src/app/services/material.service';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.css']
})
export class UpdateVendorComponent implements OnInit {
 

  vendorId=0;
  vendor:any=[];
  
  constructor(private _vendor:VendorService,private router:Router, private _route: ActivatedRoute,private _category: InventoryService,private _login:LoginServiceService) { }

  ngOnInit(): void {
    this.vendorId=  this._route.snapshot.params['vendorId'];
    
    
   this._vendor.getVendorById(this.vendorId).subscribe(
    (data: any) => {
      this.vendor=data;
      console.log(this.vendor);

      this.vendor.last_Modified_by=this._login.getUser();
    },
    (error) => {
      Swal.fire({
        title: 'Error!',
        text: 'Vendor not found !! Try again !!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      console.log(error);
      this.router.navigate(['/dashboard/vendor/'])
    }
  )


  }

  formSubmit(){

    console.log("hi button clicked")
   


    this._vendor.updateVendor(this.vendor).subscribe(
      (data: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Vendor updated successfully !!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigate(['/dashboard/vendor/'])
    
        
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
