import { Component, OnInit, ViewChild } from '@angular/core';
import { Worker } from "../../../../models/worker.model";
import { WorkerService } from '../../../../services/worker.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'service', 'available', 'actions'];
  dataSource: MatTableDataSource<Worker>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  renderHtml: boolean = false;
  
 /**
  * gets list of workers
  * @param service 
  * @param as 
  */
  constructor(private service: WorkerService, private as: AuthService) {
    this.as.loggedCompany.subscribe(result => {
      if (result) {
        this.renderHtml = true;
        this.service.getCompanyWorkers(result.id)
          .subscribe(data => {
            this.dataSource = new MatTableDataSource(data);
          }).add(() => {
            this.dataSource.sort = this.sort;
            console.log(this.sort);
          });
      }
    });
  }

  sight: boolean = false;


  ngOnInit(): void {

  }

  /**
   * 
   * @param dWorker 
   * passes a worker to delete function
   */
  Delete(dWorker: Worker): void {
    this.service.delete(dWorker.id)
      .subscribe(data => {
        console.log(data);
        this.updateList();
      });
  }

  /**
   * selects the worker, passes values into service for retrieval by other components.
   * @param upWorker 
   */

  Update(upWorker: Worker): void {
    this.sight = true
    this.service.setWorker(upWorker);
  }

/**
 * filters table
 * @param event 
 */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * updates DOM upon delete or update operation
   */
  updateList() {
    this.as.loggedCompany.subscribe(result => {
      if (result) {
        this.renderHtml = true;
        this.service.getCompanyWorkers(result.id)
          .subscribe(data => {
            this.dataSource = new MatTableDataSource(data);
          });
      }
    });
  }

}
