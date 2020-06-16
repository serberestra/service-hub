import { Injectable } from '@angular/core';
import { Worker } from "../models/worker.model";
import { Subject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private url: string;
  private workers: Worker[];
  private selectedWorker = new Subject<Worker>();
  /**
   * 
   * @param http for making AJAX calls
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Creates worker in backend
   * @param worker worker to be created
   */
  createWroker(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(`${environment.localUrl}/worker`, worker);
  }

  /**
   * Returns all workers in backend
   */
  getAllWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(`${environment.localUrl}workers-view`);
  }

  /**
   * Sets worker to be subscribed to in other components
   * @param worker worker to be set
   */
  setWorker(worker: Worker) {
    this.selectedWorker.next(worker);
  }

  /**
   * gets worker set to be subscribed to
   */
  getWorker() {
    return this.selectedWorker;
  }

  /**
   * Gets all workers of a specific company
   * @param id id of the company to get the workers of
   */
  getCompanyWorkers(id: number): Observable<Worker[]> {
    return this.http.get<Worker[]>(`${environment.localUrl}workers/company/` + id);
  }

  /**
   * Deletes a worker in backend
   * @param id id of worker to be deleted
   */
  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.localUrl}worker/` + id);
  }

  /**
   * Updates a worker's details in backend
   * @param work worker to be updated
   */
  update(work: Worker): Observable<Worker> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let url = `${environment.localUrl}worker`;
    return this.http.put<Worker>(url, work, { headers: headers })
  }

}
