import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DescriptionService } from 'src/app/services/description.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { LoginServiceService } from 'src/app/services/login.service.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-description',
  templateUrl: './add-description.component.html',
  styleUrls: ['./add-description.component.css']
})
export class AddDescriptionComponent implements OnInit {
 

  descriptionId=0;
  public description = {
    name: '',
    created_by: '',
   
  }
  
  constructor(private _description:DescriptionService,private router:Router, private _route: ActivatedRoute,private _category: InventoryService,private _login:LoginServiceService) { }

  ngOnInit(): void {
    
   

      this.description.created_by=this._login.getUser();
  
  }

  formSubmit(){

    console.log("hi button clicked")
   


    this._description.addDescription(this.description).subscribe(
      (data: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Description added successfully !!',
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
