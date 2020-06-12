import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(
    private http: HttpClient
  ) { }



  /**
   * 
   * POST  a new reservation
   *    
   * @param reservation {
    "id": 2,                  needs this but that should not be...
    "bookedBy": "1010",       soon to get User id...
    "workerId": 3,            yes
    "date": "10/10/2020",     ...
    "status": 1               boolean/1 to change to string...
    }
   */
  register(reservation: Reservation) {
    console.log("for ReservationService: bookBy: " + reservation.bookBy);
    return this.http.post<Reservation>('http://localhost:9191/api/reservation', reservation);

  }

}
