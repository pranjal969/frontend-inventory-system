import { Component, OnInit } from '@angular/core';
import { StockinService } from 'src/app/services/stockin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stock-in',
  templateUrl: './stock-in.component.html',
  styleUrls: ['./stock-in.component.css']
})
export class StockInComponent implements OnInit{
  stockin:any=[];
  displayedColumns: string[] = ['sin_id', 'quantity', 'stock_in', 'created_by' ,'price','actions'];
  dataSource = this.stockin;

  
  constructor(private _stockin:StockinService) { }
  ngOnInit(): void {
    this._stockin.getAllStockin().subscribe((data:any)=>{
      //success
      this.stockin=data;
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

}
