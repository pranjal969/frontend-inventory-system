import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from 'src/app/services/material.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  materials:any=[];
  displayedColumns: string[] = ['m_id', 'name', 'c_id', 'created_At' ,'modified_at','actions'];
  dataSource = this.materials;
  
  constructor(private router:Router,private _route: ActivatedRoute,private _materials:MaterialService) { }
  ngOnInit(): void {
    this._materials.material().subscribe((data:any)=>{
    
  this.materials=data;
  console.log(this.materials);


      
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
