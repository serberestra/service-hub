import { Component, OnInit } from '@angular/core';
import { WorkerService } from "../../../services/worker.service";
import { Worker } from "../../../models/worker.model";

@Component({
  selector: 'app-workerlist',
  templateUrl: './workerlist.component.html',
  styleUrls: ['./workerlist.component.scss']
})
export class WorkerlistComponent implements OnInit {

  
  

  constructor(
    private ws: WorkerService
  ) { }

  ngOnInit(): void {
  }

  workers: Worker[] = this.ws.getAllWorkers();
}
