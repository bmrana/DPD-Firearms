import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PeopleService } from '../people.service';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import { OrderPipePipe } from '../../shared/pipes/order-pipe.pipe';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit, OnDestroy {
  userList: MicrosoftGraph.User[];
  allGraphUsersSubs: Subscription;
  filteredGraphUsersSubs: Subscription;

  constructor(private peopleService: PeopleService, private orderPipe: OrderPipePipe) { }

  ngOnInit() {
    this.filteredGraphUsersSubs = this.peopleService.filteredGraphUsers
      .subscribe(
        (users) => {
          this.userList = this.orderPipe.transform(users, 'surname', false);
        }
      );
  }

  ngOnDestroy() {
    this.filteredGraphUsersSubs.unsubscribe();
  }

}
