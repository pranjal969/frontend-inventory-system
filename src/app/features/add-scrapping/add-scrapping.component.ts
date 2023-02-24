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
  selector: 'app-add-scrapping',
  templateUrl: './add-scrapping.component.html',
  styleUrls: ['./add-scrapping.component.css']
})
export class AddScrappingComponent implements OnInit {
  category:any=[];
  material:any=[];
  vendor:any=[];
  stockin:any=[];
  scrappingId=0;
  public scrapping = {
    m_id: '',
    c_id: '',
    quantity:'',
    scrapped:'',
    menufacture_lot_no:'',
    vendor_lot_no:'',
    issued_by:'',
    issued_to:'',
    price:'',
    last_Modified_by:'',
   
  }
  constructor(private _scrapping:ScrappingService,private _stockin:StockinService,private router:Router, private _route: ActivatedRoute,private _category: InventoryService,private _material: MaterialService,private _login:LoginServiceService,private _vendor:VendorService) { }
  ngOnInit(): void {

   
        this.scrapping.last_Modified_by=this._login.getUser();
  
     

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

  }

  formSubmit(){

    console.log("hi button clicked")
   


    this._scrapping.addScraping(this.scrapping).subscribe(
      (data: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Scrapping added successfully !!',
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