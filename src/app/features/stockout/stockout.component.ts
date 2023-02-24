import { Component, OnInit } from '@angular/core';
import { StockoutService } from 'src/app/services/stockout.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-stockout',
  templateUrl: './stockout.component.html',
  styleUrls: ['./stockout.component.css']
})
export class StockoutComponent implements OnInit{
  stockout:any=[];
  fileName= 'StockOutExcelSheet.xlsx';
  displayedColumns: string[] = ['sin_id', 'quantity', 'stock_in', 'created_by' ,'price','actions'];
  dataSource = this.stockout;

  
  constructor(private _stockout:StockoutService) { }
  ngOnInit(): void {
    this._stockout.getAllStockout().subscribe((data:any)=>{
      //success
      this.stockout=data.filter((temp: any) => temp.isdelete == 0);
      console.log(this.stockout);
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


//delete stockout
deleteStockout(sout_id: any) {
  Swal.fire({
    title: 'Delete',
    text: 'Are you sure you want to delete this stockout !!',
    icon: 'warning',
    confirmButtonText: 'Delete',
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      //delete
      this._stockout.deletestockout(sout_id).subscribe((data: any) => {
        //success
        this.stockout = this.stockout.filter((temp: any) => temp.sout_id != sout_id);
        Swal.fire({
          title: 'Success!',
          text: 'Stockin deleted successfully!!',
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
