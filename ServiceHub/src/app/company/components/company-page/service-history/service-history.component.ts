import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../../../../services/reservation.service";
import { ResView } from "../../../../models/resView.model";
import { AuthService } from "../../../../services/auth.service";
@Component({
  selector: 'app-service-history',
  templateUrl: './service-history.component.html',
  styleUrls: ['./service-history.component.scss']
})
export class ServiceHistoryComponent implements OnInit {

  uid : number;
  cid : number;
  res : ResView[] = []; 
  constructor(private rs:ReservationService,
              private as: AuthService ) { }

  ngOnInit(): void {
    this.as.loggedUser.subscribe(result=>this.uid=result.id);
    console.log(this.uid);
    this.rs.companyIdGet(this.uid).subscribe(result2 => this.cid = result2.userId);
    this.rs.getByCompany(this.cid).subscribe(data =>
      {
      for(var rv in data){
      if(data[rv]['status']===true)
      {
        this.res.push(data[rv]);
      }
    }
  });
  }

}
