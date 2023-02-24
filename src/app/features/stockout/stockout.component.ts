import { Component, OnInit } from '@angular/core';
import { StockoutService } from 'src/app/services/stockout.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stockout',
  templateUrl: './stockout.component.html',
  styleUrls: ['./stockout.component.css']
})
export class StockoutComponent implements OnInit{
  stockout:any=[];
  displayedColumns: string[] = ['sin_id', 'quantity', 'stock_in', 'created_by' ,'price','actions'];
  dataSource = this.stockout;

  
  constructor(private _stockout:StockoutService) { }
  ngOnInit(): void {
    this._stockout.getAllStockout().subscribe((data:any)=>{
      //success
      this.stockout=data;
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

}
