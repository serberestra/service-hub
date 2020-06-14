import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../../../../services/reservation.service";
import { ResView } from "../../../../models/resView.model";
import { AuthService } from "../../../../services/auth.service";
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-service-history',
  templateUrl: './service-history.component.html',
  styleUrls: ['./service-history.component.scss']
})
export class ServiceHistoryComponent implements OnInit {

  uid : number;
  cid : number;
  res : ResView[] = [];
  fres : ResView[]; 
  constructor(private rs:ReservationService,
              private as: AuthService ) { }

  ngOnInit(): void {
    this.as.loggedCompany.subscribe(result => this.cid = result.id);
    console.log(this.cid);
    this.rs.getByCompany(this.cid).subscribe(data =>
      {
      for(var rv in data){
      if(data[rv]['status']===true)
      {
        // console.log(data[rv]['reservationDate']);
        // data[rv]['reservationDate']= new Date(formatDate(data[rv]['reservationDate'], 'yyyy-MM-dd', 'en-US'));
        // console.log(data[rv]['reservationDate']);
        this.res.push(data[rv]);
      }
    }
  });
  }
  actualInputfield : Date;

  get inputField() {
    return this.actualInputfield;
  }
  set inputField(temp: Date){
    console.log(temp);
    this.actualInputfield = temp;
    this.fres = this.actualInputfield ? this.performFilter(this.inputField) : this.res;
  }
    
    
    performFilter(filterValue: Date): ResView[] {

      return this.res.filter(

        (fresno: ResView) =>{
          console.log(fresno.reservationDate.setTime);
        fresno.reservationDate.setTime === filterValue.setTime;})
    
}
}