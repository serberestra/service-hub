import { Component, OnInit } from '@angular/core';
import { Worker } from "../../../../models/worker.model";
import { WorkerService } from '../../../../services/worker.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent implements OnInit {

  workers: Worker[];
  uid : number;
  cid : number;

  constructor(private service: WorkerService, private as : AuthService) { }

  uWorker: Worker;
  sight: boolean = false;

  ngOnInit(): void {
    this.as.loggedUser.subscribe(result=>this.uid=result.id);
    console.log(this.uid);
    this.service.getCompanyWorkers()
      .subscribe(data => { this.workers = data }
      );
  }

  Delete(id: number): void {
    this.service.delete(id)
      .subscribe(data => console.log(data));
  }

  Update(upWorker: Worker): void {
    this.sight = true
    this.service.setWorker(upWorker);
  }

}
