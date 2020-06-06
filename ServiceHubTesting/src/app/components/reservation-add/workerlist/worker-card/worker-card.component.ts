import { Component, OnInit, Input } from '@angular/core';
import { Worker } from '../../../../models/worker.model';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.scss']
})
export class WorkerCardComponent implements OnInit {

  @Input() worker: Worker;

  constructor() { }

  ngOnInit(): void {
  }

}
