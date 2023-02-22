import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { LoginServiceService } from 'src/app/services/login.service.service';
import { MaterialService } from 'src/app/services/material.service';
import { StockinService } from 'src/app/services/stockin.service';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-stockin',
  templateUrl: './add-stockin.component.html',
  styleUrls: ['./add-stockin.component.css']
})
export class AddStockinComponent implements OnInit{
  category:any=[];
  material:any=[];
  vendor:any=[];
  public stockin = {
    m_id: '',
    c_id: '',
    quantity: '',
    stock_in: '',
    menufacture_lot_no:'',
    vendor_lot_no:'',
    created_by:'',
    vendor_id:'',
    price:''
  }

  constructor(private _stockin:StockinService,private router:Router, private _route: ActivatedRoute,private _category: InventoryService,private _material: MaterialService,private _login:LoginServiceService,private _vendor:VendorService) { }
  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      //success
      this.category=data;
      
      this.stockin.created_by=this._login.getUser();
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
 


  this._stockin.addStockIn(this.stockin).subscribe(
    (data: any) => {
      Swal.fire({
        title: 'Success',
        text: 'Stock added successfully !!',
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
