import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DescriptionService } from 'src/app/services/description.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { LoginServiceService } from 'src/app/services/login.service.service';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-update-description',
  templateUrl: './update-description.component.html',
  styleUrls: ['./update-description.component.css']
})
export class UpdateDescriptionComponent implements OnInit {
 

  descriptionId=0;
  description:any=[];
  
  constructor(private _description:DescriptionService,private router:Router, private _route: ActivatedRoute,private _category: InventoryService,private _login:LoginServiceService) { }

  ngOnInit(): void {
    this.descriptionId=  this._route.snapshot.params['descriptionId'];
    
    
   this._description.getDescriptionById(this.descriptionId).subscribe(
    (data: any) => {
      this.description=data;
      console.log(this.description);

      this.description.last_Modified_by=this._login.getUser();
    },
    (error) => {
      Swal.fire({
        title: 'Error!',
        text: 'Description not found !! Try again !!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      console.log(error);
      this.router.navigate(['/dashboard/description/'])
    }
  )


  }

  formSubmit(){

    console.log("hi button clicked")
   


    this._description.updateDescription(this.description).subscribe(
      (data: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Description updated successfully !!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigate(['/dashboard/description/'])
    
        
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
