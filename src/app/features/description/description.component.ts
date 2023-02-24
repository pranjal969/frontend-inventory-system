import { Component, OnInit } from '@angular/core';
import { DescriptionService } from 'src/app/services/description.service';
import { VendorService } from 'src/app/services/vendor.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit{
  description:any=[];
  displayedColumns: string[] = ['description_id', 'name' ,'created_at', 'created_by', 'last_modified_by', 'actions'];
  dataSource = this.description;

  
  constructor(private _description:DescriptionService) { }

  ngOnInit(): void {
    this._description.getAllDescription().subscribe((data:any)=>{
      //success
      this.description=data;
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

}
