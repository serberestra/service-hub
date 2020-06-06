import { Injectable } from '@angular/core';
import { Worker } from "../models/worker.model";

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

  constructor() { }

  getAllWorkers(){
    return this.workers;
  }
}
