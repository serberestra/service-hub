import { Injectable } from '@angular/core';
import { Worker } from "../models/worker.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private workers: Worker[] = [

    /**
     *    id?: string,
          name: string,
          lastName: string,
          companyId?: string,
          serviceName: string,
          status?: number
     */

     new Worker(1, 'Bob', 'Guru', 1, 'Snow Removal', 1 ),
     new Worker(2, 'Shirley', 'May', 1, 'Accounting', 1 ),
     new Worker(3, 'Luther', 'Vin', 1, 'Project Mgmt.', 1 ),
     new Worker(4, 'Jay', 'Anderson', 1, 'Lawn Care', 1 )

  ];

  private selectedWorker = new Subject<Worker>();
  

  constructor() { 
    this.selectedWorker.next(new Worker(-1, '', '', -1, '', -1 )); // I don't know, default value, I don't think it is supposed to work like this.
  }

  getAllWorkers(){
    return this.workers;
  }

  setWorker(worker: Worker){
    console.log("WorkerService has worker: " + worker.name)
    this.selectedWorker.next(worker);
  }

  getWorker(){
    return this.selectedWorker.asObservable();
  }
}
