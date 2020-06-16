import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  reason = '';
  /**
   * closes the sidenav bar
   * @param reason 
   */
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
