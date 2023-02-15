import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  constructor(private router:Router,private _route: ActivatedRoute) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  qid = 0;
  quiz: any;
  categories: any = []


}