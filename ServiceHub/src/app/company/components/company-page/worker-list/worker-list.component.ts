import { Component, OnInit, ViewChild, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Worker } from "../../../../models/worker.model";
import { WorkerService } from '../../../../services/worker.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormErrorMatcher } from 'src/app/services/form-error-matcher';

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

  dialogRef: any;

  /**
   * gets list of workers
   * @param service 
   * @param as 
   * @param dialog
   */
  constructor(private service: WorkerService, private as: AuthService, public dialog: MatDialog) {
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

  openDialog(worker: Worker): void {
    this.dialogRef = this.dialog.open(DialogWorker, {
      width: '350px',
      data: worker
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
    this.openDialog(upWorker);
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

@Component({
  selector: 'dialog-worker',
  templateUrl: 'dialog-worker.html',
})
export class DialogWorker {

  @Input() cWorker: any;
  @Output()
  updateList: EventEmitter<boolean> = new EventEmitter<boolean>();
  matcher = new FormErrorMatcher();

  worker: Worker;

  updateWorker: FormGroup;

  get first() { return this.updateWorker.get('first') }
  get last() { return this.updateWorker.get('last') }
  get serv() { return this.updateWorker.get('serv') }
  get status() { return this.updateWorker.get('status') }

  constructor(
    private ws: WorkerService,
    public dialogRef: MatDialogRef<DialogWorker>,
    @Inject(MAT_DIALOG_DATA) public data: Worker) {

    this.worker = data;
    this.updateWorker = new FormGroup({
      first: new FormControl(data.firstName, [Validators.required, Validators.pattern(/[a-zA-Z]*/)]),
      last: new FormControl(data.lastName, [Validators.required, Validators.pattern(/[a-zA-Z]*/)]),
      serv: new FormControl(data.serviceName, Validators.required),
      status: new FormControl(data.available, Validators.required)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onChange(isChecked: boolean) {
    if (isChecked) {
      this.worker.available = true;
    }
    else {
      this.worker.available = false;
    }
  }

  update() {
    if (this.first.value) {
      this.worker.firstName = this.first.value;
    }
    if (this.last.value) {
      this.worker.lastName = this.last.value;
    }
    if (this.serv.value) {
      this.worker.serviceName = this.serv.value;
    }
    if (this.status.value) {
      // this.worker.available = false;
      this.worker.available = this.status.value === 'true' ? true : false;
    }
    this.ws.update(this.worker).subscribe(data => {
      if (data) {
        this.closeDialog();
        this.updateList.emit(true);
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}