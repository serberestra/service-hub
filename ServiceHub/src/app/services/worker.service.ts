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

  // private selectedWorker: Worker;
  private selectedWorker = new Subject<Worker>();

  constructor(
    private http: HttpClient
  ) {
    //this.selectedWorker: Worker = {-1, '', '', -1, '', -1 }; // I don't know, default value, I don't think it is supposed to work like this.
  }

  createWroker(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(`${environment.localUrl}/worker`, worker);
  }

  getAllWorkers(): Observable<Worker[]> {
    //return this.workers;
    return this.http.get<Worker[]>('http://localhost:9191/api/workers');// http://localhost:9191/api/worker/worker
  }

  setWorker(worker: Worker) {
    console.log("WorkerService has worker: " + worker.firstName)
    this.selectedWorker.next(worker);
  }

  getWorker() {
    return this.selectedWorker;
  }

  getCompanyWorkers(id: number): Observable<Worker[]> {
    return this.http.get<Worker[]>(`${environment.localUrl}workers/company/` + id);
  }

  delete(id: number): Observable<any> {
    return this.http.delete('http://localhost:9191/api/worker/' + id);
  }

  update(work: Worker): Observable<Worker> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let url = 'http://localhost:9191/api/worker';
    return this.http.put<Worker>(url, work, { headers: headers })
  }

}
