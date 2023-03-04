import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { LoginServiceService } from 'src/app/services/login.service.service';
import { MaterialService } from 'src/app/services/material.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-materials',
  templateUrl: './add-materials.component.html',
  styleUrls: ['./add-materials.component.css']
})
export class AddMaterialsComponent implements OnInit {

  category:any=[];
  public material = {
    name: '',
    dimension: '',
    created_by: '',
    c_id: ''
  }
  constructor(private router:Router, private _route: ActivatedRoute,private _category: InventoryService,private _material: MaterialService,private _login:LoginServiceService) { }
  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      //success
   //   this.category=data;
      this.category=data.filter((temp: any) => temp.isdelete == 0);
      
      this.material.created_by=this._login.getUser();
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
 


  this._material.addMaterial(this.material).subscribe(
    (data: any) => {
      Swal.fire({
        title: 'Success',
        text: 'Material added successfully !!',
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
