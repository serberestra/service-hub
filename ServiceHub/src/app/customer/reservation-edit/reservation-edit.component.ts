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

  //private workerSubscription: Subscription;
  worker: Worker = {
    id: -1,
    firstName: "",
    lastName: "",
    companyId: -1,
    serviceName: "",

  };  //  status: -1

  reservationArr: Reservation[];
  reservation: Reservation = {
    id: 4,
    bookedBy: '',      // is user id
    workerId: -9,
    date: new Date(),         //  date: new Date(),  "2020/06/18"
    status: true
  };

  //private userSubscription: Subscription;
  private user: User = {

    id: "",
    username: "",
    password: "",
    userType: "",
    phoneNumber: ""
  };

  constructor() {

    this.reservation.date = new Date(formatDate(this.reservation.date, 'yyyy-MM-dd', 'en-US'));         // if trying to use date, try this...

  }

  ngOnInit(): void {

    // per userId get all Rerservations per User
  }

  onSubmit() {

    // submit the edited reservation to a service
    // in Reservation
  }

}
