import { Component, OnInit } from '@angular/core';
import { Worker } from "../../../models/worker.model";
import { WorkerService } from '../../../services/worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent implements OnInit {

  workers: Worker[];

  constructor(private service: WorkerService) { }

  uWorker: Worker;
  sight: boolean = false;

  ngOnInit(): void {
    this.service.getCompanyWorkers()
      .subscribe(data => { this.workers = data }
      );
  }

  Delete(id: number): void {
    this.service.delete(id);
  }

  Update(upWorker: Worker): void {
    this.sight = true
    this.uWorker = upWorker;
  }

}
