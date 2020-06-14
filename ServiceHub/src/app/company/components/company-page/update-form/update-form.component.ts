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

  ngOnInit(): void {
    this.Wsubscription = this.ws.getWorker().subscribe((worker: Worker) => {
      this.worker = worker;
    });
    // this.initForm();
  }
  get first() { return this.updateWorker.get('first') }
  get last() { return this.updateWorker.get('last') }
  get serv() { return this.updateWorker.get('serv') }

  onChange(isChecked: boolean) {
    if (isChecked) {
      this.worker.available = true;
    }
    else {
      this.worker.available = false;
    }
  }

  update() {
    console.log(this.worker);
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
        // this.initForm();
        this.resetForm();
        this.updateList.emit(true);
      }
    });
  }

  resetForm() {
    this.first.setValue('');
    this.last.setValue('');
    this.serv.setValue('');
  }

}
