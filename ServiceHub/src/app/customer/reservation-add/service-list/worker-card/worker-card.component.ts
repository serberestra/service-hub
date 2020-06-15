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

  /**
   * 
   * @param worker when this worker is selected from the list, it populate for form for reserving a service.
   */
  onSelect(worker: Worker) {
    this.ws.setWorker(worker);
  }

}
