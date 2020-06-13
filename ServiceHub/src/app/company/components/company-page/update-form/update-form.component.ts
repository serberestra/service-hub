import { Component, OnInit, Input } from '@angular/core';
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

  updateWorker = new FormGroup({
    first : new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]*/)]),
    last : new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]*/)]),
    serv : new FormControl('', Validators.required)
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
      this.worker = { id: worker.id, firstName: worker.firstName, lastName: worker.lastName, companyId: worker.companyId, serviceName: worker.serviceName, available : worker.available
       };
      console.log(worker.id);
      console.log(worker.firstName);
      console.log(worker.lastName);
      console.log(worker.serviceName);
      console.log(worker.available);
    })
  }
  get first() {return this.updateWorker.get('first')}
  get last() {return this.updateWorker.get('last')}
  get serv() {return this.updateWorker.get('serv')}

  onChange(isChecked : boolean){
    if(isChecked){
      this.worker.available=true;
    }
    else{
      this.worker.available=false;
    }
  }

  update() { 
    console.log(this.worker.firstName);
    if(this.first.value){
    this.worker.firstName = this.first.value;}
    if(this.last.value){
    this.worker.lastName = this.last.value;}
    if(this.serv.value){
    this.worker.serviceName = this.serv.value;}
    console.log(this.worker.firstName);
    if(!this.worker.available){
      this.worker.available=false;
    }
    this.ws.update(this.worker).subscribe(data => console.log(data));
  }

}
