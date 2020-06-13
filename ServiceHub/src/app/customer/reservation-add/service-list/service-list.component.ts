import { Component, OnInit } from '@angular/core';
import { WorkerService } from "../../../services/worker.service";
import { Worker } from "../../../models/worker.model";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class SerivicelistComponent implements OnInit {

  workers: Worker[];

  constructor(
    private ws: WorkerService
  ) { }

  ngOnInit(): void {
    this.ws.getAllWorkers().subscribe(workers => {
      this.workers = workers;
    });
  }

  //workers: Worker[] = this.ws.getAllWorkers();
}
