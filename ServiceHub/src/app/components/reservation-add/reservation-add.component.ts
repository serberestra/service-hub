import { Component, OnInit } from '@angular/core';
import { Worker } from "../../models/worker.model";
import { WorkerService } from "../../services/worker.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.scss']
})
export class ReservationAddComponent implements OnInit {

  private workerSubscription: Subscription;
  private worker: Worker = {
     id: -1,
     name: "",
     lastName: "",
     companyId: -1,
     serviceName: "",
     status: -1
  };

  constructor(private ws: WorkerService) { }

  ngOnInit(): void {
    //this.worker = this.ws.getWorker();
    this.workerSubscription = this.ws.getWorker().subscribe((worker: Worker)=> {
      this.worker = {id: worker.id, name: worker.name, lastName: worker.lastName, companyId: worker.companyId, serviceName: worker.serviceName, status: worker.status};
    });
    console.log("ngOnInit: ReservationAddComponent's worker.name: "+this.worker.name);
  }

  onSubmit(){
    
  }

  ngOnDestroy() {
    //this.workerSubscription.unsubscribe();
  }

}


/**
 *   posts: Post[] = [];
  private postsSub: Subscription;

  constructor( public postService: PostsService ) { }

  ngOnInit() {
    //this.posts = this.postService.getPosts();
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener().subscribe((posts: Post[]) =>{
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
 */
