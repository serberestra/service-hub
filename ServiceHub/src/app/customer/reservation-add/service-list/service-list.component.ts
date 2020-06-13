import { Component, OnInit } from '@angular/core';
import { WorkerService } from "../../../services/worker.service";
import { Worker } from "../../../models/worker.model";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class SerivicelistComponent implements OnInit {


  actualInputfield = '';

  get inputField() {
    return this.actualInputfield;
  }
  set inputField(temp: string) {
    this.actualInputfield = temp;

    this.filteredWorkers = this.actualInputfield ?
      this.performFilter(this.inputField) : this.workers;
    //        if-true                            if-false
  }




  workers: Worker[];
  filteredWorkers: Worker[];


  constructor(
    private ws: WorkerService
  ) { }
  

  ngOnInit(): void {

    this.ws.getAllWorkers().subscribe(workers => {
      this.workers = workers;
      console.log("this.workers.length: " + this.workers.length);
      this.filteredWorkers = this.workers;
    });

  }

  //workers: Worker[] = this.ws.getAllWorkers();


  performFilter(filterValue: string): Worker[] {
    filterValue = filterValue.toLocaleLowerCase();

    return this.workers.filter(
      (worker: Worker) =>
        worker.serviceName.toLocaleLowerCase().indexOf(filterValue) !== -1
    );
  }



}
