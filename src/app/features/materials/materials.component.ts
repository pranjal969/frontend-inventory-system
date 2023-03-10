import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from 'src/app/services/inventory.service';
import { MaterialService } from 'src/app/services/material.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';


import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  materials: any[] = [];
  fileName = 'MaterialExcelSheet.xlsx';
  displayedColumns: string[] = ['sno', 'name', 'created_At', 'modified_at', 'categoriesName', 'actions'];
  categories: any[] = [];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  c_id: any;
  cname: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _inventory: InventoryService,
    private router: Router,
    private _route: ActivatedRoute,
    private _materials: MaterialService,
    private _snackBar:MatSnackBar
  ) {}

  ngOnInit() {
    this._materials.material().subscribe(
      (data: any) => {
        this.materials=data.filter((temp: any) => temp.isdelete == 0);

        this.dataSource = new MatTableDataSource(this.materials);
      this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // this._snackBar.open('Material loaded succesfully :', 'OK', {
        //   duration: 10000
        // });
        console.log(this.materials);
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong try again !!',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        console.log(error);
      }
    );
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
        this._materials.deleteMaterial(m_id).subscribe(
          (data: any) => {
            //success
            this.materials = this.materials.filter((temp: any) => temp.m_id != m_id);
            this.dataSource.data = this.materials;
            Swal.fire({
              title: 'Success!',
              text: 'Material deleted successfully!!',
              icon: 'success',
              confirmButtonText: 'Ok'
            });
          },
          (error) => {
            Swal.fire({
              title: 'Error!',
              text: 'Something went wrong',

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
