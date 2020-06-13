import { Component, OnInit } from '@angular/core';
import { WorkerService } from "../../services/worker.service";
import { Worker } from "../../models/worker.model";
import { AuthService } from '../../services/auth.service';
import { OpenSnackBarService } from "../../services/open-snack-bar.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  servicesList: Worker[];

  constructor(
    private workerService: WorkerService,
    private authService: AuthService,
    private _snackBar: OpenSnackBarService
  ) {
    this.workerService.getAllWorkers().subscribe(
      result => {
        this.servicesList = result;
      }
    )
  }

  ngOnInit(): void {
  }

  selectedService() {
    if (this.authService.isAuthenticated()) {
      // TODO - 
    } else {
      this._snackBar.open("To add this service login first...", '');
    }
  }



}
