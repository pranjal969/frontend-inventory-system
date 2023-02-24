
import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { ScrappingService } from 'src/app/services/scrapping.service';
import Swal from 'sweetalert2';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-scrapping',
  templateUrl: './scrapping.component.html',
  styleUrls: ['./scrapping.component.css']
})
export class ScrappingComponent implements OnInit{
  scrapping:any=[];
  displayedColumns: string[] = ['scrapping_id', 'quantity', 'issued_by', 'issued_to' ,'price','actions'];
  dataSource = this.scrapping;

  fileName= 'ScrappingExcelSheet.xlsx';
  
  constructor(private _scrapping:ScrappingService) { }

  ngOnInit(): void {
    this._scrapping.getAllScrapping().subscribe((data:any)=>{
      //success
      this.scrapping=data.filter((temp: any) => temp.isdelete == 0);
      console.log(this.scrapping);
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


//delete scrapping
deleteDescription(scrapping_id: any) {
  Swal.fire({
    title: 'Delete',
    text: 'Are you sure you want to delete this scrapping !!',
    icon: 'warning',
    confirmButtonText: 'Delete',
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      //delete
      this._scrapping.deleteScrapping(scrapping_id).subscribe((data: any) => {
        //success
        this.scrapping = this.scrapping.filter((temp: any) => temp.scrapping_id != scrapping_id);
        Swal.fire({
          title: 'Success!',
          text: 'Scrapping deleted successfully!!',
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
