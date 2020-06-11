import { Component, OnInit } from '@angular/core';
import { Worker } from "../../models/worker.model";
import { WorkerService } from "../../services/worker.service";
import { Subscription } from 'rxjs';
import { Reservation } from "../../models/reservation.model";
import { formatDate } from '@angular/common';
import { ReservationService } from "../../services/reservation.service";

@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.scss']
})
export class ReservationAddComponent implements OnInit {

  private workerSubscription: Subscription;
  worker: Worker = {
    id: -1,
    firstName: "",
    lastName: "",
    companyId: -1,
    serviceName: "",

  };  //  status: -1

  reservation: Reservation = {
    id: 4,
    bookBy: -9,      // is user id
    workerId: -9,
    date: new Date(),        //  date: new Date(),   date is too difficult to deal with... ... ..
    status: true
  };


  constructor(
    private ws: WorkerService,
    private rs: ReservationService
  ) {
    //this.reservation.date = this.datePipe.transform(this.reservation.date, 'yyyy-MM-dd');
    console.log("this is date property : !!  " + formatDate(this.reservation.date, 'dd-MM-yyyy', 'en-US'));
    this.reservation.date = new Date(formatDate(this.reservation.date, 'yyyy-MM-dd', 'en-US'));         // if trying to use date, try this...
    //this.reservation.date = formatDate(this.reservation.date, 'yyyy-MM-dd', 'en-US').toString();
  }

  ngOnInit(): void {

    //this.worker = this.ws.getWorker();
    this.workerSubscription = this.ws.getWorker().subscribe((worker: Worker) => {
      this.worker = { id: worker.id, firstName: worker.firstName, lastName: worker.lastName, companyId: worker.companyId, serviceName: worker.serviceName };
    });
    console.log("ngOnInit: ReservationAddComponent's worker.firstName: " + this.worker.firstName);
  }


  ngOnDestroy() {
    this.workerSubscription.unsubscribe();
  }

  onSubmit() {
    console.log("these are the worker fields:");
    console.log(this.reservation.date);
    console.log(this.worker.id);
    console.log(this.worker.firstName);
    console.log(this.worker.lastName);
    console.log(this.worker.serviceName);
    console.log(this.worker.companyId);


    // "id": 2,                  needs this but that should not be...
    // "bookedBy": "1010",       soon to get User id...
    // "workerId": 3,            yes
    // "date": "10/10/2020",     ...
    // "status": true               boolean/1 to change to string...

    this.reservation.id = 1; // id does not matter since it will be generated
    this.reservation.bookBy = this.worker.id;       // needs to become User.id ..................
    this.reservation.workerId = this.worker.id;
    // I might have to conver formatting of date given: reservation.date set by HTML
    //this.reservation.date is set
    this.reservation.status = true;


    this.reservation.date = new Date(formatDate(this.reservation.date, 'dd-MM-yyyy', 'en-US'));    // if your trying to use a date, try this ...
    //this.reservation.date = formatDate(this.reservation.date, 'dd-MM-yyyy', 'en-US').toString();
    console.log("Reformatted date property is:  " + formatDate(this.reservation.date, 'dd-MM-yyyy', 'en-US'));

    this.rs.register(this.reservation).toPromise().then(res => console.log(res)).catch(err => console.log(err));
  }
}



