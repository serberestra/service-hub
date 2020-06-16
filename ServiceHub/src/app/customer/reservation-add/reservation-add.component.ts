import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Worker } from "../../models/worker.model";
import { WorkerService } from "../../services/worker.service";
import { Subscription } from 'rxjs';
import { Reservation } from "../../models/reservation.model";
import { formatDate } from '@angular/common';
import { ReservationService } from "../../services/reservation.service";
import { DatePipe } from '@angular/common';
import { AuthService } from "../../services/auth.service";
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.scss'],
  providers: [DatePipe]
})
export class ReservationAddComponent implements OnInit {

  myString: string = "";

  private workerSubscription: Subscription;
  worker: Worker = {
    id: -1,
    firstName: "",
    lastName: "",
    companyId: -1,
    companyName: '',
    serviceName: "",

  };  //  status: -1

  reservation: Reservation = {
    id: 4,
    bookedBy: "",      // is user id
    workerId: -9,
    date: new Date(),         //  date: new Date(),  "2020/06/18"
    status: true
  };

  private userSubscription: Subscription;
  private user: User = {

    id: "",
    username: "",
    password: "",
    userType: "",
    phoneNumber: ""
  };


  /**
   * 
   * @param as Checks for logged in user
   * @param ws gets the worker assigned
   * @param rs sets reservation status
   * @param datePipe sets date format
   */
  constructor(
    private as: AuthService,
    private ws: WorkerService,
    private rs: ReservationService,
    public datePipe: DatePipe,
  ) {

    this.reservation.date = new Date(formatDate(this.reservation.date, 'yyyy-MM-dd', 'en-US'));
  }

  /**
   * sets user value and selected worker to pass values to backend
   */
  ngOnInit(): void {

    this.as.loggedUser.subscribe(result => {
      this.user = result;
    })
    this.workerSubscription = this.ws.getWorker().subscribe((worker: Worker) => {
      this.worker = worker;
    });
  }

  /**
   * Deselects worker
   */
  ngOnDestroy() {
    this.workerSubscription.unsubscribe();
  }
  /**
   * 
   * @param form gets form values to set variables
   */

  onSubmit(form: NgForm) {

    if (form.value.invalid) {
      return;
    }

    this.reservation.id = 99;

    this.myString = this.user.id;

    this.reservation.bookedBy = this.myString;

    this.reservation.workerId = this.worker.id;

    this.reservation.status = true;

    this.rs.register(this.reservation).toPromise().then(res => {
      console.log(res);
      form.resetForm();
    }).catch(err => console.log(err));
  }

}
