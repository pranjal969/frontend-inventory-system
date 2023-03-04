import { Component,ViewChild,OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseidService } from 'src/app/services/caseid.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-case-id',
  templateUrl: './case-id.component.html',
  styleUrls: ['./case-id.component.css']
})
export class CaseIdComponent implements OnInit {
  search : String ="";
  getcaseid:{
    caseid:"";
    patient_name:"";
    d_name:"";
    crm:"";
    
  }
  stagging:any =[]
  dispatch:any=[]
  account:any=[]
  planning:any=[]
 
  @ViewChild('firstAccordion') firstAccordion: MatAccordion;
  @ViewChild('secondAccordion') secondAccordion: MatAccordion;

    constructor(private router:Router, private _route: ActivatedRoute,private _caseId:CaseidService) { }
  ngOnInit(): void {
 
  }
  
  closeAllPanels(){
    this.firstAccordion.closeAll();
  
}
openAllPanels(){
    this.firstAccordion.openAll();
}
closeAllPanels2(){
  this.secondAccordion.closeAll();

}
openAllPanels2(){
  this.secondAccordion.openAll();
}

formSubmit(){

  console.log("hi button clicked")
 


  this._caseId.getCaseById(this.search).subscribe(
    (data: any) => {
      
      this.getcaseid=data.Data.Stagging[0];
      this.stagging=data.Data.Stagging;
      this.dispatch=data.Data.Dispatch;
      this.account=data.Data.Account;
      this.planning=data.Data.Planning;
      console.log(this.stagging);
  
      
    },
    (error) => {
      Swal.fire({
        title: 'Error!',
        text: 'Unable to load data check Case Id !!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      console.log(error);
    }
  )
}


}

