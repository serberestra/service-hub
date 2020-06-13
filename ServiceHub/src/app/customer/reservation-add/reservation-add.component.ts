import { Component, OnInit } from '@angular/core';
import { Worker } from "../../models/worker.model";
import { WorkerService } from "../../services/worker.service";
import { Subscription } from 'rxjs';
import { Reservation } from "../../models/reservation.model";
import { formatDate } from '@angular/common';
import { ReservationService } from "../../services/reservation.service";
import { DatePipe } from '@angular/common';
import { AuthService } from "../../services/auth.service";
import { User } from 'src/app/models/user.model';

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


  constructor(
    private as: AuthService,
    private ws: WorkerService,
    private rs: ReservationService,
    public datePipe: DatePipe
  ) {

    console.log("Before Formatting date property : !!  " + this.reservation.date);
    //this.reservation.date = this.datePipe.transform(this.reservation.date, 'yyyy-MM-dd');                    // WORKED WITH STRING
    // console.log("this is date property : !!  " + formatDate(this.reservation.date, 'yyyy-MM-dd', 'en-US'));

    this.reservation.date = new Date(formatDate(this.reservation.date, 'yyyy-MM-dd', 'en-US'));         // if trying to use date, try this...
    console.log("After Formatting: this is date property : !!  " + this.reservation.date);
    //this.reservation.date = formatDate(this.reservation.date, 'yyyy-MM-dd', 'en-US').toString();
  }

  ngOnInit(): void {

    this.as.loggedUser.subscribe(result => {
      console.log('im in reservation add user', result);
      this.user = result;
    })
    //this.worker = this.ws.getWorker();
    this.workerSubscription = this.ws.getWorker().subscribe((worker: Worker) => {
      this.worker = { id: worker.id, firstName: worker.firstName, lastName: worker.lastName, companyId: worker.companyId, serviceName: worker.serviceName };
    });
    console.log("ngOnInit: ReservationAddComponent's worker.firstName: " + this.worker.firstName);

    this.userSubscription = this.as.getLogged_in_user().subscribe((user: User) => {
      this.user = { id: user.id, username: user.username, password: user.password, userType: user.userType, phoneNumber: user.phoneNumber };
    });
    console.log("ReservationAddComponent Has: " + this.user.id);
    console.log("ReservationAddComponent Has: " + this.user.username);

  }


  ngOnDestroy() {
    this.workerSubscription.unsubscribe();
    //this.userSubscription.unsubscribe();
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







    /**
     * FOR OBSERVABLE..remember to delete the
     */
    // this.as.getLogged_in_user().subscribe((user: User) => {
    //   console.log("this is user: " + user);

    // });


    // this.userSubscription = this.as.getLogged_in_user().subscribe((user: User) => {
    //   this.user = {id:user.id, username:user.username, password:user.password, userType:user.userType, phoneNumber:user.phoneNumber};
    // });
    // console.log("ReservationAddComponent Has: " + this.user.id);
    // console.log("ReservationAddComponent Has: " + this.user.username);




    this.reservation.id = 99; // id does not matter since it will be generated


    console.log("SHOULD NOT be NULL: --->" + this.user.id);
    this.myString = this.user.id;
    console.log("this is my NEEDED string: " + this.myString);
    
    this.reservation.bookedBy = this.myString;// parse a String to a Number  // needs to become User.id ................

    // I WAS USING THIS BUT I DONT THINK IT WAS WORKING
    //this.reservation.bookBy = 11;
    this.reservation.workerId = this.worker.id;
    // I might have to conver formatting of date given: reservation.date set by HTML
    //this.reservation.date is set
    this.reservation.status = true;

    //console.log("here is the date: " + new Date(this.reservation.date));
    console.log("After DatePicker: this is the date: " + this.reservation.date);

    // this.reservation.date = new Date(formatDate(this.reservation.date, 'dd-MM-yyyy', 'en-US'));    // if your trying to use a date, try this ...
    //this.reservation.date = new Date(this.reservation.date);    // I THINK THIS JUST SET TODAYS DATE AFTER THE DATE PICKER, THIS WONT WORK ...

    //this.reservation.date = formatDate(this.reservation.date, 'dd-MM-yyyy', 'en-US').toString();
    //console.log("Reformatted date property is:  " + formatDate(this.reservation.date, 'dd-MM-yyyy', 'en-US'));
    this.rs.register(this.reservation).toPromise().then(res => console.log(res)).catch(err => console.log(err));
  }
}



