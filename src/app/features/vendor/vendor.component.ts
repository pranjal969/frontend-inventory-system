import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent  implements OnInit{
  vendor:any=[];
  displayedColumns: string[] = ['vendor_id', 'name' ,'vendor_Code', 'created_At', 'created_by', 'actions'];
  dataSource = this.vendor;

  
  constructor(private _vendor:VendorService) { }

  ngOnInit(): void {
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

}
