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
   * Creates a new reservation
   *    
   * @param reservation Reservation to be created
   */
  register(reservation: Reservation) {
    console.log("for ReservationService: bookBy: " + reservation.bookedBy);
    return this.http.post<Reservation>(environment.localUrl + 'reservation', reservation);

  }

  /**
   * Gets reservations specific to a user
   * @param id The actual user ID
   */
  listOfReservationsByUserId(id: string): Observable<ReservationCatcher[]> {

    return this.http.get<ReservationCatcher[]>(`${environment.localUrl}reservations-view/user/${id}`);

  }

  /**
   * Adds a new Reservation to the list of old reservations 
   * @param resCatcher the reservation to be added
   */
  updateReservationCatcher(resCatcher: ReservationCatcher): Observable<ReservationCatcher> {
    return this.http.put<ReservationCatcher>(`${environment.localUrl}reservation-view`, resCatcher);
  }

  /**
   * Sets a reservation to be added and later subscribed to
   * @param resCatcher reservation to be set
   */
  setReservationCatcher(resCatcher: ReservationCatcher) {
    this.selectedReservationCatcher.next(resCatcher);
  }

  /**
   * Gets the set reservation upon being called.
   */
  getReservationCatcher() {
    return this.selectedReservationCatcher.asObservable();
  }

  /**
   * Intended to get the ID of the company by the User ID
   * @param id user id
   */
  getCompanyByUserId(id: number): Observable<Company> {
    return this.http.get<Company>(`${environment.localUrl}company/user/` + id)
  }

  /**
   * Gets list of reservations by company
   * @param id id of the company to search for
   */
  getByCompany(id: number): Observable<ResView[]> {
    return this.http.get<ResView[]>(`${environment.localUrl}reservations-view/company/` + id)
  }

  deleteReservationCatcher(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.localUrl}reservation-view/${id}`);
  }

}
