import { Injectable } from '@angular/core';
import { Worker } from "../models/worker.model";
import { Subject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
  ) { }

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

  getCompanyWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>('http://localhost:9191/api/workers/company/5001');
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
