import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';

import * as XLSX from 'xlsx';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent  implements OnInit{
  
  fileName= 'VendorExcelSheet.xlsx';
  vendor:any=[];
  displayedColumns: string[] = ['vendor_id', 'name' ,'vendor_Code', 'created_At', 'created_by', 'actions'];
  dataSource = this.vendor;

  
  constructor(private _vendor:VendorService) { }

  ngOnInit(): void {
    this._vendor.getAllVendor().subscribe((data:any)=>{
      //success
      this.vendor=data.filter((temp: any) => temp.isdelete == 0);

      console.log(this.vendor);
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

//delete vendor
deleteVendor(vendor_id: any) {
  Swal.fire({
    title: 'Delete',
    text: 'Are you sure you want to delete this vendor !!',
    icon: 'warning',
    confirmButtonText: 'Delete',
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      //delete
      this._vendor.deletevendor(vendor_id).subscribe((data: any) => {
        //success
        this.vendor = this.vendor.filter((temp: any) => temp.vendor_id != vendor_id);
        Swal.fire({
          title: 'Success!',
          text: 'Vendor deleted successfully!!',
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
