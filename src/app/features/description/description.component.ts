import { Component, OnInit } from '@angular/core';
import { DescriptionService } from 'src/app/services/description.service';
import { VendorService } from 'src/app/services/vendor.service';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit{
  description:any[] = [];
  displayedColumns: string[] = ['description_id', 'name' ,'created_at', 'created_by', 'last_modified_by', 'actions'];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  fileName= 'DescriptionExcelSheet.xlsx';
  
  constructor(private _description:DescriptionService) { }

  ngOnInit(): void {
    this._description.getAllDescription().subscribe((data:any)=>{
      //success
      this.description=data.filter((temp: any) => temp.isdelete == 0);

      this.dataSource = new MatTableDataSource(this.description);
      this.dataSource.paginator = this.paginator;
      console.log(this.description);
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



  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataSource.data = this.description.slice(startIndex, endIndex);
  }


//delete description
deleteDescription(description_id: any) {
  Swal.fire({
    title: 'Delete',
    text: 'Are you sure you want to delete this description !!',
    icon: 'warning',
    confirmButtonText: 'Delete',
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      //delete
      this._description.deletedescription(description_id).subscribe((data: any) => {
        //success
        this.description = this.description.filter((temp: any) => temp.description_id != description_id);
        this.dataSource.data = this.description;
        Swal.fire({
          title: 'Success!',
          text: 'Description deleted successfully!!',
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
