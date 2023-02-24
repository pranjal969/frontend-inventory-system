import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { MaterialService } from 'src/app/services/material.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.css']
})
export class RawMaterialComponent  implements OnInit {
  materials:any=[];
  fileName= 'MaterialExcelSheet.xlsx';
  
  displayedColumns: string[] = ['m_id', 'name', 'c_id', 'created_At' ,'modified_at','actions'];
  //dataSource = this.materials;
  dataSource = new MatTableDataSource(this.materials);
  categories:any=[];
  c_id:any;
  cname:any;
  constructor(private _liveAnnouncer: LiveAnnouncer,private _inventory:InventoryService,private router:Router,private _route: ActivatedRoute,private _materials:MaterialService) { }
  ngOnInit(): void {
    this._materials.material().subscribe((data:any)=>{
    
  //this.materials=data;
  this.materials = data.filter((temp: any) => temp.isdelete == 0 && temp.categories.name=='Consumable');



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

//delete material
deleteMaterial(m_id: any) {
  Swal.fire({
    title: 'Delete',
    text: 'Are you sure you want to delete this material !!',
    icon: 'warning',
    confirmButtonText: 'Delete',
    showCancelButton: true
  }).then((result) => {
    if (result.isConfirmed) {
      //delete
      this._materials.deleteMaterial(m_id).subscribe((data: any) => {
        //success
        this.materials = this.materials.filter((temp: any) => temp.m_id != m_id);
        Swal.fire({
          title: 'Success!',
          text: 'Material deleted successfully!!',
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
