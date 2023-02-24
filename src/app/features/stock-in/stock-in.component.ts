import { Component, OnInit } from '@angular/core';
import { StockinService } from 'src/app/services/stockin.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-stock-in',
  templateUrl: './stock-in.component.html',
  styleUrls: ['./stock-in.component.css']
})
export class StockInComponent implements OnInit{
  stockin:any=[];
  displayedColumns: string[] = ['sin_id', 'quantity', 'stock_in', 'created_by' ,'price','actions'];
  dataSource = this.stockin;
  fileName= 'StockinExcelSheet.xlsx';
  
  constructor(private _stockin:StockinService) { }
  ngOnInit(): void {
    this._stockin.getAllStockin().subscribe((data:any)=>{
      //success
      this.stockin=data.filter((temp: any) => temp.isdelete == 0);
      console.log(this.stockin);
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

//delete stockin
deleteStockin(sin_id: any) {
  Swal.fire({
    title: 'Delete',
    text: 'Are you sure you want to delete this stockin !!',
    icon: 'warning',
    confirmButtonText: 'Delete',
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      //delete
      this._stockin.deletestockin(sin_id).subscribe((data: any) => {
        //success
        this.stockin = this.stockin.filter((temp: any) => temp.sin_id != sin_id);
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
