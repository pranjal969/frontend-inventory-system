import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  cid: number;
  createdat: number;
  createdby:number;
  lastmod:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cid: 1, name: 'Raw Material', createdat: 1.0079, createdby: 123,lastmod:'abc'},
  {cid: 2, name: 'Consumable', createdat: 4.0026, createdby: 123,lastmod:'abc'},
  {cid: 3, name: 'Assets', createdat: 6.941, createdby: 123,lastmod:'abc'},
  {cid: 4, name: 'Stationary',createdat: 9.0122, createdby: 123,lastmod:'abc'},
  {cid: 5, name: 'Boron', createdat: 10.811, createdby: 123,lastmod:'abc'},
  {cid: 6, name: 'Carbon', createdat: 12.0107, createdby: 123,lastmod:'abc'},
  {cid: 7, name: 'Nitrogen', createdat: 14.0067, createdby: 123,lastmod:'abc'},
  {cid: 8, name: 'Oxygen', createdat: 15.9994, createdby: 123,lastmod:'abc'},
  {cid: 9, name: 'Fluorine', createdat: 18.9984, createdby: 123,lastmod:'abc'},
  {cid: 10, name: 'Neon', createdat: 20.1797, createdby: 123,lastmod:'abc'},
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  displayedColumns: string[] = ['cid', 'name', 'createdat', 'createdby' ,'lastmod'];
  dataSource = ELEMENT_DATA;
}
