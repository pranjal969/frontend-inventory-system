import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { LoginServiceService } from 'src/app/services/login.service.service';
import { MaterialService } from 'src/app/services/material.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-materials',
  templateUrl: './update-materials.component.html',
  styleUrls: ['./update-materials.component.css']
})
export class UpdateMaterialsComponent implements OnInit {
 

  categoryId=0;
  materialId=0;
  name:any;
  dimension:any;
  material:any=[];
  category:any=[];
  
  constructor(private router:Router, private _route: ActivatedRoute,private _category: InventoryService,private _material: MaterialService,private _login:LoginServiceService) { }

  ngOnInit(): void {
    this.materialId=  this._route.snapshot.params['materialId'];
    
    
   this._material.getMaterialById(this.materialId).subscribe(
    (data: any) => {
      this.material=data;
      console.log(this.material);
      this.material.last_Modified_by=this._login.getUser();

    },
    (error) => {
      Swal.fire({
        title: 'Error!',
        text: 'Product not found !! Try again !!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      console.log(error);
      this.router.navigate(['/dashboard/material/'])
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

  }

  formSubmit(){

    console.log("hi button clicked")
   


    this._material.updateMaterial(this.material).subscribe(
      (data: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Material updated successfully !!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigate(['/dashboard/material/'])
    
        
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
