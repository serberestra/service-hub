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

  /**
   * Worker service necessary for cross component transfer
   * @param ws 
   */
  constructor(
    private ws: WorkerService,
  ) { }

  ngOnInit(): void {
  }

  /**
   * Sets the actual worker to be transferred to reservation-add
   * @param worker 
   */
  onSelect(worker: Worker) {
    this.ws.setWorker(worker);
  }

}
