import { Component, OnInit } from '@angular/core';
import { Worker } from "../../../../models/worker.model";
import { WorkerService } from '../../../../services/worker.service';
import { ReservationService } from "../../../../services/reservation.service";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent implements OnInit {

  workers: Worker[];
  wFilter : Worker[];
  uid : number;
  cid : number;

  constructor(private service: WorkerService, private as : AuthService, private rs : ReservationService) { }

  uWorker: Worker;
  sight: boolean = false;
  actualInputfield = '';

  // get inputField() {
  //   return this.actualInputfield;
  // }
  // set inputField(temp: string){
  //   this.actualInputfield = temp;
  //   this.wFilter = this.actualInputfield?
  //   this.performFilter(this.inputField) : this.workers;
  // }
  ngOnInit(): void {
    this.as.loggedUser.subscribe(result=>this.uid=result.id);
    console.log(this.uid);
    this.rs.companyIdGet(this.uid).subscribe(result2 => this.cid = result2.id);
    console.log(this.cid);
    this.service.getCompanyWorkers(this.cid)
      .subscribe(data => { this.workers = data }
      );
      this.wFilter = this.workers;
  }

  Delete(id: number): void {
    this.service.delete(id)
      .subscribe(data => console.log(data));
  }

  Update(upWorker: Worker): void {
    this.sight = true
    this.service.setWorker(upWorker);
  }
  performFilter(input : string){

  }
}
