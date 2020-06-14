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
  wFilter: Worker[];
  uid: number;
  cid: number;

  constructor(private service: WorkerService, private as: AuthService) {
    // this.as.loggedCompany.subscribe(result => this.cid = result.id);
    // console.log(this.cid);
    // this.service.getCompanyWorkers(this.cid)
    //   .subscribe(data => { this.workers = data;
    //   this.wFilter = data }
    //   );
    //   this.wFilter = this.workers;
    this.updateList();
  }

  uWorker: Worker;
  sight: boolean = false;
  actualInputfield = '';

  get inputField() {
    return this.actualInputfield;
  }
  set inputField(temp: string) {
    this.actualInputfield = temp;
    this.wFilter = this.actualInputfield ? this.performFilter(this.inputField) : this.workers;
  }

  ngOnInit(): void { }

  Delete(id: number): void {
    this.service.delete(id)
      .subscribe(data => console.log(data));
  }

  Update(upWorker: Worker): void {
    this.sight = true
    this.service.setWorker(upWorker);
  }

  performFilter(filterValue: string): Worker[] {
    filterValue = filterValue.toLocaleLowerCase();

    return this.workers.filter(
      (fwork: Worker) =>
        fwork.serviceName.toLocaleLowerCase().indexOf(filterValue) !== -1
    );
  }

  updateList() {
    this.as.loggedCompany.subscribe(result => this.cid = result.id);
    this.service.getCompanyWorkers(this.cid)
      .subscribe(data => {
        this.workers = data;
        this.wFilter = data
      });
  }

}
