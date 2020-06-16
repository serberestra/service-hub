import { Component, OnInit } from '@angular/core';
import { ReservationService } from "../../../../services/reservation.service";
import { ResView } from "../../../../models/resView.model";
import { AuthService } from "../../../../services/auth.service";
import { formatDate } from '@angular/common';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-service-history',
  templateUrl: './service-history.component.html',
  styleUrls: ['./service-history.component.scss']
})
export class ServiceHistoryComponent implements OnInit {

  uid : number;
  cid : number;
  res : ResView[] = [];
  fres : ResView[]; 

  /**
   * 
   * @param rs 
   * @param as 
   */
  constructor(private rs:ReservationService,
              private as: AuthService ) { }
  
displayedColumns: string[] = ['ID', 'Date', 'Service', 'BookedBy', 'WorkerID' ];
dataSource: MatTableDataSource<ResView>;            

/**
 * provides all reservations that have been booked and formats date
 */
  ngOnInit(): void {
    this.as.loggedCompany.subscribe(result => this.cid = result.id);
    console.log(this.cid);
    this.rs.getByCompany(this.cid).subscribe(data =>
      {
      for(var rv = 0; rv < data.length; rv++){
      if(data[rv]['status']===true)
      {
        data[rv]['reservationDate']= new Date(formatDate(data[rv]['reservationDate'], 'yyyy-MM-dd', 'en-US'));
        this.res.push(data[rv]);
      }
    }
    this.dataSource = new MatTableDataSource(this.res);
  });
  }
/**
 * filters reservations
 * @param event 
 */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}