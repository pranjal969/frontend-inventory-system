
import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { ScrappingService } from 'src/app/services/scrapping.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-scrapping',
  templateUrl: './scrapping.component.html',
  styleUrls: ['./scrapping.component.css']
})
export class ScrappingComponent implements OnInit{
  scrapping:any=[];
  displayedColumns: string[] = ['scrapping_id', 'quantity', 'issued_by', 'issued_to' ,'price','actions'];
  dataSource = this.scrapping;

  
  constructor(private _scrapping:ScrappingService) { }

  ngOnInit(): void {
    this._scrapping.getAllScrapping().subscribe((data:any)=>{
      //success
      this.scrapping=data;
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

}
