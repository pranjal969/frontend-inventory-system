import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  categories:any=[];
  displayedColumns: string[] = ['c_id', 'name', 'created_At', 'created_by' ,'last_Modified_by','actions'];
  dataSource = this.categories;

  
  constructor(private _inventory:InventoryService) { }

  ngOnInit(): void {
    this._inventory.categories().subscribe((data:any)=>{
      //success
      this.categories=data;
      console.log(this.categories);
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
