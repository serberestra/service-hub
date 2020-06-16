import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkerService } from "../../../../services/worker.service";
import { Worker } from "../../../../models/worker.model";
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {

  @Input() cWorker: any;
  @Output()
  updateList: EventEmitter<boolean> = new EventEmitter<boolean>();

  updateWorker = new FormGroup({
    first: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]*/)]),
    last: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]*/)]),
    serv: new FormControl('', Validators.required)
  })

  private Wsubscription: Subscription;

  worker: Worker = {
    id: -1,
    firstName: "",
    lastName: "",
    companyId: -5001,
    serviceName: "",
    available: true
  };

  constructor(private ws: WorkerService) { }

  /**
   * gets the worker set by the update button in worker-list to be updated
   */
  ngOnInit(): void {
    this.Wsubscription = this.ws.getWorker().subscribe((worker: Worker) => {
      this.worker = worker;
    });
  }
  get first() { return this.updateWorker.get('first') }
  get last() { return this.updateWorker.get('last') }
  get serv() { return this.updateWorker.get('serv') }

  
  /**
   * Method changes the availability field depending on the state of the checkbox.
   * @param isChecked 
   */
  onChange(isChecked: boolean) {
    if (isChecked) {
      this.worker.available = true;
    }
    else {
      this.worker.available = false;
    }
  }


  /**
   * Method retrieves values from fields and sends them to function in worker-list component.
  If a user does not change a field, the value of the field will be null, so the if checks 
  prevent nulls from interfering and allow the function to work as intended.
   */
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
    if (!this.worker.available) {
      this.worker.available = false;
    }
    this.ws.update(this.worker).subscribe(data => {
      if (data) {
        this.updateList.emit(true);
      }
    });
  }

}
