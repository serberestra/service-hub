import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Worker } from '../../../../models/worker.model';
import { WorkerService } from "../../../../services/worker.service";

declare var $: any;
@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.scss']
})
export class WorkerCardComponent implements OnInit {

  @Input() worker: Worker;

  constructor(
    private ws: WorkerService,
  ) { }

  ngOnInit(): void {
  }

  onSelect(worker: Worker) {
    this.ws.setWorker(worker);
  }

}
