import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { LoginServiceService } from 'src/app/services/login.service.service';
import { MaterialService } from 'src/app/services/material.service';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
 

  vendorId=0;
  public vendor = {
    vendor_Code: '',
    name: '',
    created_by:''
   
  }
  
  constructor(private _vendor:VendorService,private router:Router, private _route: ActivatedRoute,private _category: InventoryService,private _login:LoginServiceService) { }

  ngOnInit(): void {
    
  
this.vendor.created_by=this._login.getUser();

  }

  formSubmit(){

    console.log("hi button clicked")
   


    this._vendor.addVendor(this.vendor).subscribe(
      (data: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Vendor added successfully !!',
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
