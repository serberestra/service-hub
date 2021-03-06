import { Component, OnInit } from '@angular/core';
import { FormErrorMatcher } from 'src/app/services/form-error-matcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "../../../services/auth.service";
import { WorkerService } from "../../../services/worker.service";
import { OpenSnackBarService } from "../../../services/open-snack-bar.service";
import { Worker } from '../../../models/worker.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-worker',
  templateUrl: './register-worker.component.html',
  styleUrls: ['./register-worker.component.scss']
})
export class RegisterWorkerComponent implements OnInit {

  matcher = new FormErrorMatcher();
  companyId: number;
  worker: Worker;

  registerWorker = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern(/([a-zA-Z])/)]),
    lastName: new FormControl('', [Validators.required, Validators.pattern(/([a-zA-Z])/)]),
    serviceName: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  })

  get firstName() { return this.registerWorker.get('firstName'); }
  get lastName() { return this.registerWorker.get('lastName'); }
  get serviceName() { return this.registerWorker.get('serviceName'); }
  get status() { return this.registerWorker.get('status'); }

  constructor(private authService: AuthService,
    private wService: WorkerService,
    private _snackBar: OpenSnackBarService,
    private router: Router) {
    this.authService.loggedCompany.subscribe(company => {
      this.companyId = company['id'];
    })
  }

  ngOnInit(): void {
  }

  /**
   * passes fields into create worker function and redirects to main company page
   */
  onSubmit() {
    this.worker = this.registerWorker.value;
    this.worker.companyId = this.companyId;
    this.wService.createWroker(this.worker)
      .subscribe(worker => {
        this._snackBar.open('Worker / Service created succesfully', '');
        this.router.navigate(['company/workers']);
      })
  }

}
