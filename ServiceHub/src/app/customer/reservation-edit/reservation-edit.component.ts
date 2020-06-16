import { Component, OnInit } from '@angular/core';
import { Worker } from "../../models/worker.model";
import { Reservation } from "../../models/reservation.model";
import { User } from 'src/app/models/user.model';
import { ReservationService } from "../../services/reservation.service";
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.scss']
})
export class ReservationEditComponent implements OnInit {

  worker: Worker = {
    id: -1,
    firstName: "",
    lastName: "",
    companyId: -1,
    serviceName: "",

  }; 

  reservationArr: Reservation[];
  reservation: Reservation = {
    id: 4,
    bookedBy: '',      
    workerId: -9,
    date: new Date(),         
    status: true
  };

  private user: User = {

    id: "",
    username: "",
    password: "",
    userType: "",
    phoneNumber: ""
  };

  /**
   * Sets date format
   */
  constructor() {

    this.reservation.date = new Date(formatDate(this.reservation.date, 'yyyy-MM-dd', 'en-US'));         // if trying to use date, try this...

  }

  ngOnInit(): void {

    
  }

  onSubmit() {

  }

}
