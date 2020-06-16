import { Component, OnInit } from '@angular/core';
import { Worker } from "../../models/worker.model";
import { Reservation } from "../../models/reservation.model";
import { User } from 'src/app/models/user.model';
import { ReservationService } from "../../services/reservation.service";
import { formatDate } from '@angular/common';
import { environment } from '../../../environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { ReservationCatcher } from "../../models/reservationCatcher.model";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-reservation-request-old',
  templateUrl: './reservation-request-old.component.html',
  styleUrls: ['./reservation-request-old.component.scss']
})
export class ReservationRequestOldComponent implements OnInit {

  worker: Worker = {
    id: -1,
    firstName: "",
    lastName: "",
    companyId: -1,
    serviceName: "",

  }; 

  private reservationCatcherSubscription: Subscription;
  reservationCatcher: ReservationCatcher =
    {
      reservationId: "",
      service: "select card -->",
      companyId: "",
      companyName: "",
      companyAddress: "",
      contact: "",
      workerId: "",
      firstName: "select card -->",
      lastName: "",
      reservationDate: "",
      status: true,
      userId: "",
      userName: ""
    };

  reservationArr: ReservationCatcher[] = [
    {
      reservationId: "",
      service: "",
      companyId: "",
      companyName: "",
      companyAddress: "",
      contact: "",
      workerId: "",
      firstName: "",
      lastName: "",
      reservationDate: "",
      status: true,
      userId: "",
      userName: ""
    }
  ];

  reservation: Reservation = {
    id: 4,
    bookedBy: "",      
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
   * 
   * @param as for current logged-in user
   * @param rs to get previous reservations by user
   */
  constructor(

    private as: AuthService,
    private rs: ReservationService
  ) {

  }

  /**
   * sets user field to signed in user and gets all reservations booked by the current user
   * Also gets a subscription to an object in the case that a user selects a previous
   * reservation to book again
   */
  ngOnInit(): void {

    this.as.loggedUser.subscribe(result => {
      this.user = result;
    })

    this.rs.listOfReservationsByUserId(this.user.id).subscribe((resList: ReservationCatcher[]) => {
      this.reservationArr = resList;

    });

    this.reservationCatcherSubscription = this.rs.getReservationCatcher().subscribe((r: ReservationCatcher) => {
      this.reservationCatcher =
      {
        reservationId: r.reservationId,
        service: r.service,
        companyId: r.companyId,
        companyName: r.companyName,
        companyAddress: r.companyAddress,
        contact: r.contact,
        workerId: r.workerId,
        firstName: r.firstName,
        lastName: r.lastName,
        reservationDate: r.reservationDate,
        status: true,
        userId: r.userId,
        userName: r.userName
      };
    });

  }

/**
 * 
 * @param reservation sets reservation to be subscribed to elsewhere in this form
 */
  onSelect(reservation: ReservationCatcher) {

    this.rs.setReservationCatcher(reservation);

  }

  /**
 * sends old reservation to the reservation service to book again 
 * @param reservation: the ReservationCatcher object to update 
 */
  onSubmit() {
    this.rs.updateReservationCatcher(this.reservationCatcher).subscribe(res => {
    this.updateList();
    });

  }

  /**
   * Resets DOM
   */
  updateList() {

    this.rs.listOfReservationsByUserId(this.user.id).subscribe((resList: ReservationCatcher[]) => {
      this.reservationArr = resList;
    });

  }

  onDelete(reservation : ReservationCatcher) {

    console.log("delete ran with id: " + reservation.reservationId);

    this.rs.deleteReservationCatcher(reservation.reservationId).subscribe(()=>{
      this.updateList();
    });

    

  }

}
