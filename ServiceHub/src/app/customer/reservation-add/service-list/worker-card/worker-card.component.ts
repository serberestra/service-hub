import { Component, OnInit, Input } from '@angular/core';
import { Worker } from '../../../../models/worker.model';
import { WorkerService } from "../../../../services/worker.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.scss']
})
export class WorkerCardComponent implements OnInit {

  @Input() worker: Worker;

  constructor(
    private ws: WorkerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSelect( worker: Worker ){
    console.log("WorkerCardComponent : " + worker.firstName);
    this.ws.setWorker(worker);
    //this.router.navigate(['/reservationAdd']);  this did not trigger reservation-add ngOnInit to fire.
  }

}
