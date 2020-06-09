import { Injectable } from '@angular/core';
import { Worker } from "../models/worker.model";
import { Subject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  /**
   *   {
        "id": 1001,
        "firstName": "Rich",
        "lastName": "Black",
        "companyId": 5001,
        "serviceName": "Gutter Clean"
    },
   */

  // private workers: Worker[] = [

  //   /**
  //    *    id?: string,
  //         name: string,
  //         lastName: string,
  //         companyId?: string,
  //         serviceName: string,
  //         status?: number
  //    */

  //    new Worker(1, 'Bob', 'Guru', 1, 'Snow Removal', 1 ),
  //    new Worker(2, 'Shirley', 'May', 1, 'Accounting', 1 ),
  //    new Worker(3, 'Luther', 'Vin', 1, 'Project Mgmt.', 1 ),
  //    new Worker(4, 'Jay', 'Anderson', 1, 'Lawn Care', 1 )

  // ];

  private workers: Observable<Worker[]>;

  // private selectedWorker: Worker;
  private selectedWorker = new Subject<Worker>();
  

  constructor(
    private http: HttpClient
  ) { 
    //this.selectedWorker: Worker = {-1, '', '', -1, '', -1 }; // I don't know, default value, I don't think it is supposed to work like this.
  }

  getAllWorkers(): Observable<Worker[]>{
    //return this.workers;
    return this.http.get<Worker[]>('http://localhost:9191/api/worker/worker');
  }

  setWorker(worker: Worker){
    console.log("WorkerService has worker: " + worker.firstName)
    this.selectedWorker.next(worker);
  }

  getWorker(){
    return this.selectedWorker;
  }
}
