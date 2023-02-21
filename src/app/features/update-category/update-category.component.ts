import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { LoginServiceService } from 'src/app/services/login.service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  category:any=[];
  categoryId=0;
  constructor(private router:Router, private _route: ActivatedRoute,private _category: InventoryService,private _login:LoginServiceService) { }

  ngOnInit(): void {
    this.categoryId=  this._route.snapshot.params['categoryId'];
    
    
   this._category.getCategoryById(this.categoryId).subscribe(
    (data: any) => {
      this.category=data;
      console.log(this.category);
      this.category.last_Modified_by=this._login.getUser();

    },
    (error) => {
      Swal.fire({
        title: 'Error!',
        text: 'Category not found !! Try again !!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      console.log(error);
      this.router.navigate(['/dashboard/categories/'])
    }
  )

  }

  formSubmit(){

    console.log("hi button clicked")
   


    this._category.updateCategory(this.category).subscribe(
      (data: any) => {
        Swal.fire({
          title: 'Success',
          text: 'Category updated successfully !!',
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
