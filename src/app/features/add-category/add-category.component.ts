import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { LoginServiceService } from 'src/app/services/login.service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{
  public category = {
    name: '',
    created_by: '',
   
  }

  constructor(private router:Router, private _route: ActivatedRoute,private _category: InventoryService,private _login:LoginServiceService) { }
  
  ngOnInit(): void {
  
      
      this.category.created_by=this._login.getUser();
      
}

formSubmit(){

  console.log("hi button clicked")
 


  this._category.addCategory(this.category).subscribe(
    (data: any) => {
      Swal.fire({
        title: 'Success',
        text: 'Category added successfully !!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      this.router.navigate(['/dashboard/categories/'])
  
      
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
