import { Component, OnInit, ViewChild } from '@angular/core';
import { Worker } from "../../../../models/worker.model";
import { WorkerService } from '../../../../services/worker.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'service', 'available', 'actions'];
  dataSource: MatTableDataSource<Worker>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // workers: Worker[];
  // wFilter: Worker[];
  // uid: number;
  renderHtml: boolean = false;

  constructor(private service: WorkerService, private as: AuthService) {
    this.as.loggedCompany.subscribe(result => {
      if (result) {
        this.renderHtml = true;
        this.service.getCompanyWorkers(result.id)
          .subscribe(data => {
            // this.workers = data;
            // this.wFilter = data;
            this.dataSource = new MatTableDataSource(data);
          }).add(() => {
            this.dataSource.sort = this.sort;
            console.log(this.sort);
          });
      }
    });
  }

  // uWorker: Worker;
  sight: boolean = false;
  // actualInputfield = '';

  // get inputField() {
  //   return this.actualInputfield;
  // }
  // set inputField(temp: string) {
  //   this.actualInputfield = temp;
  //   this.wFilter = this.actualInputfield ? this.performFilter(this.inputField) : this.workers;
  // }

  ngOnInit(): void {
    // this.updateList();
    // this.dataSource.sort = this.sort;
    // this.as.loggedCompany.subscribe(result => {
    //   if (result) {
    //     this.renderHtml = true;
    //     this.service.getCompanyWorkers(result.id)
    //       .subscribe(data => {
    //         // this.workers = data;
    //         // this.wFilter = data;
    //         this.dataSource = new MatTableDataSource(data);
    //         this.dataSource.sort = this.sort;
    //       });
    //   }
    // });

  }

  Delete(id: number): void {
    this.service.delete(id)
      .subscribe(data => console.log(data));
  }

  Update(upWorker: Worker): void {
    this.sight = true
    this.service.setWorker(upWorker);
  }

  // performFilter(filterValue: string): Worker[] {
  //   filterValue = filterValue.toLocaleLowerCase();

  //   return this.workers.filter(
  //     (fwork: Worker) =>
  //       fwork.serviceName.toLocaleLowerCase().indexOf(filterValue) !== -1
  //   );
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateList() {
    this.as.loggedCompany.subscribe(result => {
      if (result) {
        this.renderHtml = true;
        this.service.getCompanyWorkers(result.id)
          .subscribe(data => {
            // this.workers = data;
            // this.wFilter = data;
            this.dataSource = new MatTableDataSource(data);
          });
      }
    });
  }

}
