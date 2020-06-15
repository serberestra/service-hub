import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Worker } from "../../models/worker.model";
import { WorkerService } from "../../services/worker.service";
import { Subscription } from 'rxjs';
import { Reservation } from "../../models/reservation.model";
import { ReservationService } from "../../services/reservation.service";
import { AuthService } from "../../services/auth.service";
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.scss']
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


  constructor(
    private as: AuthService,
    private ws: WorkerService,
    private rs: ReservationService ) { }

  ngOnInit(): void {

    this.as.loggedUser.subscribe(result => {
      this.user = result;
    })
    this.workerSubscription = this.ws.getWorker().subscribe((worker: Worker) => {
      this.worker = worker;
    });
  }

  ngOnDestroy() {
    this.workerSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {

    if (form.value.invalid) {
      return;
    }

    this.reservation.id = 99;

    this.reservation.bookedBy = this.user.id;

    this.reservation.workerId = this.worker.id;

    this.reservation.status = true;

    this.rs.register(this.reservation).toPromise().then(res => {
      console.log(res);
      form.resetForm();
    }).catch(err => console.log(err));
  }

}
