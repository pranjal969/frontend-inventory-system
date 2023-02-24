import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { InventoryService } from 'src/app/services/inventory.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  categories:any=[];
  displayedColumns: string[] = ['i+1', 'name', 'created_At', 'created_by' ,'last_Modified_by','actions'];
  dataSource = this.categories;
  
  fileName= 'CategoryExcelSheet.xlsx';
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() { this.categories.sort = this.sort; }
  
  constructor(private _inventory:InventoryService) { }
 
  ngOnInit(): void {
    this._inventory.categories().subscribe((data:any)=>{
      //success
      this.categories=data.filter((temp: any) => temp.isdelete == 0);
      
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


  //delete category
  deleteCategory(c_id: any) {
  Swal.fire({
    title: 'Delete',
    text: 'Are you sure you want to delete this category !!',
    icon: 'warning',
    confirmButtonText: 'Delete',
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      //delete
      this._inventory.deleteCategory(c_id).subscribe((data: any) => {
        //success
        this.categories = this.categories.filter((temp: any) => temp.c_id != c_id);
        Swal.fire({
          title: 'Success!',
          text: 'Ctaegory deleted successfully!!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }, (error) => {
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
    
  })
}

exportexcel(): void
{
  /* pass here the table id */
  let element = document.getElementById('excel-table');
  const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

  /* generate workbook and add the worksheet */
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  /* save to file */  
  XLSX.writeFile(wb, this.fileName);

}


}
