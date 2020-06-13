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

    //private workerSubscription: Subscription;
    worker: Worker = {
      id: -1,
      firstName: "",
      lastName: "",
      companyId: -1,
      serviceName: "",
  
    };  //  status: -1

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
      bookedBy: "",      // is user id
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

  constructor(

    private as: AuthService,
    private rs: ReservationService
  ) {

    this.reservation.date = new Date(formatDate(this.reservation.date, 'yyyy-MM-dd', 'en-US'));         // if trying to use date, try this...
   }

  ngOnInit(): void {

    this.as.loggedUser.subscribe(result => {
      console.log('im in reservation add user', result);
      this.user = result;
    })
    //console.log('im in reservation add user: ', this.user.id + " & " + this.user.username);

        // per userId get all Rerservations per User
        this.rs.listOfReservationsByUserId(this.user.id).subscribe((resList: ReservationCatcher[]) => {
          console.log("resList[0].companyName: " + resList[0].companyName);
          
          this.reservationArr = resList;

          console.log("this is: resList.length: " + resList.length);
        //   for (let index = 0; index < resList.length; index++) {

        //     this.reservationArr.push(resList[index]);
            
        //   }
          
         });
        console.log("this is the length of this.reservationArr: " + this.reservationArr.length);
        
        this.reservationCatcherSubscription = this.rs.getReservationCatcher().subscribe((r: ReservationCatcher)=>{
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




  onSelect( reservation: ReservationCatcher ) {

    console.log("onSelect of RROldComp: " + reservation.service);
    console.log("onSelect of RROldComp: " + reservation.firstName);
    console.log("onSelect of RROldComp: " + reservation.lastName);

    this.rs.setReservationCatcher(reservation);

  }

    /**
   * SELECTING FROM LIST ON THE RIGHT IN TEMPLATE
   * @param reservation: the ReservationCatcher object to update 
   */
  onSubmit(  ) {

        // submit the edited reservation to a service
    // in Reservation
    console.log("this is Date: " + this.reservationCatcher.reservationDate);
    

        // I should be waiting for a response ideally ..............................................................
        this.rs.updateReservationCatcher(this.reservationCatcher);

  }

}
