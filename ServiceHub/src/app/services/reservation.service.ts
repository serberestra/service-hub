import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Reservation } from '../models/reservation.model';
import { Observable, Subject } from 'rxjs';
import { ReservationCatcher } from '../models/reservationCatcher.model';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company.model';
import { ResView } from '../models/resView.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private selectedReservationCatcher = new Subject<ReservationCatcher>();

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

  /**
   * UPDATE ReservationCatcher
   * @PutMapping("/reservation-view")
   */
  updateReservationCatcher(resCatcher: ReservationCatcher): Observable<ReservationCatcher> {
    console.log("this is Date up in ReservationService: " + resCatcher.reservationDate);
    console.log(resCatcher);
    // comment

    return this.http.put<ReservationCatcher>('http://localhost:9191/api/reservation-view', resCatcher);
  }

  setReservationCatcher(resCatcher: ReservationCatcher) {
    this.selectedReservationCatcher.next(resCatcher);
  }

  getReservationCatcher() {
    return this.selectedReservationCatcher.asObservable();
  }

  /**
   * Get company by Id
   * @param id 
   */
  getCompanyByUserId(id: number): Observable<Company> {
    return this.http.get<Company>(`${environment.localUrl}company/user/` + id)
  }
  //Corrections getCompanyByUserId and getByCompany

  getByCompany(id: number): Observable<ResView[]> {
    return this.http.get<ResView[]>(`${environment.localUrl}reservations-view/company/` + id)
  }

  deleteReservationCatcher(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:9191/api/reservation-view/${id}`); // reservation-view
                          //   http://localhost:9191/api/reservation-view/
  }

}
