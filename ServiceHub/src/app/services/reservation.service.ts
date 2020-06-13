import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Reservation } from '../models/reservation.model';
import { Observable } from 'rxjs';
import { ReservationCatcher } from '../models/reservationCatcher.model';

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
    console.log("for ReservationService: bookBy: " + reservation.bookedBy);
    return this.http.post<Reservation>('http://localhost:9191/api/reservation', reservation);

  }

  /**
   * //  http://localhost:9191/api/reservations-view/user/
   */
  listOfReservationsByUserId(id: string): Observable<ReservationCatcher[]> {

    return this.http.get<ReservationCatcher[]>(`http://localhost:9191/api/reservations-view/user/${id}`);

  }

}
