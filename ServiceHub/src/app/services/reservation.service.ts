import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Reservation } from '../models/reservation.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(
    private http: HttpClient
  ) { }



  /**
   *    
   * @param reservation {
    "id": 2,                  needs this but that should not be...
    "bookedBy": "1010",       soon to get User id...
    "workerId": 3,            yes
    "date": "10/10/2020",     ...
    "status": 1               boolean/1 to change to string...
}
   */

  // post to add a new reservation
  register(reservation: Reservation){
    return this.http.get<Reservation>('http://localhost:9191/api/reservation/create');
  }

  companyGet() : Observable<Reservation[]>{
    return this.http.get<Reservation[]>('http://localhost:9191/api/reservations-view/company/5001')
  }  
}
