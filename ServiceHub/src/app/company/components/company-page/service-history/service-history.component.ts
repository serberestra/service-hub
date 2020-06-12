import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../../../../services/reservation.service";
import { Reservation } from "../../../../models/reservation.model";

@Component({
  selector: 'app-service-history',
  templateUrl: './service-history.component.html',
  styleUrls: ['./service-history.component.scss']
})
export class ServiceHistoryComponent implements OnInit {

  res : Reservation[] 
  constructor(private rs:ReservationService ) { }

  ngOnInit(): void {
    this.rs.companyGet().subscribe(data => this.res=data);
  }

}
