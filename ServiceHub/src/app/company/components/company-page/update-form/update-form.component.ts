import { Component, OnInit, Input } from '@angular/core';
import { WorkerService } from "../../../../services/worker.service";
import { Worker } from "../../../../models/worker.model";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {

  @Input() cWorker: any;

  fName: string = 'hi';
  lName: string = 'hi';
  sName: string = 'hi';

  private Wsubscription: Subscription;
  worker: Worker = {
    id: -1,
    firstName: "",
    lastName: "",
    companyId: -5001,
    serviceName: "",

  };

  constructor(private ws: WorkerService) { }

  ngOnInit(): void {
    this.Wsubscription = this.ws.getWorker().subscribe((worker: Worker) => {
      this.worker = { id: worker.id, firstName: worker.firstName, lastName: worker.lastName, companyId: worker.companyId, serviceName: worker.serviceName };
    })
  }

  update() {
    this.worker.firstName = this.fName;
    this.worker.lastName = this.lName;
    this.worker.serviceName = this.sName;
    this.ws.update(this.worker).subscribe(data => console.log(data));
  }

}
