import { Component, OnInit } from '@angular/core';
import { WorkerService } from "../../../services/worker.service";
import { Worker } from "../../../models/worker.model";

@Component({
  selector: 'app-workerlist',
  templateUrl: './workerlist.component.html',
  styleUrls: ['./workerlist.component.scss']
})
export class WorkerlistComponent implements OnInit {

  workers: Worker[];
  

  constructor(
    private ws: WorkerService
  ) { }

  ngOnInit(): void {
    this.ws.getAllWorkers().subscribe(workers => {
      this.workers = workers;
      console.log("this.workers.length: " + this.workers.length);
    });
  }

  //workers: Worker[] = this.ws.getAllWorkers();
}
