import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Reservation } from '../models/reservation.model';
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { ResView } from "../models/resView.model";
import { Company } from "../models/company.model";

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

  companyIdGet(id : number) : Observable<Company>{
    return this.http.get<Company>(`${environment.localUrl}api/company/user/` + id)
  }

  getByCompany(id : number) : Observable<ResView[]>{
    return this.http.get<ResView[]>(`${environment.localUrl}api/reservations-view/company/` + id)
  }  
}
