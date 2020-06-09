import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {

  @Input() cWorker;
  constructor() { }

  ngOnInit(): void {
  }

  Update() {
    // document.getElementById.
  }

}
