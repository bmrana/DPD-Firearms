import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people/people.service';
import { Subscription } from 'rxjs/Subscription';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  graphUsers: MicrosoftGraph.User[];
  graphUsersSubs: Subscription

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.graphUsersSubs = this.peopleService.graphUsers
      .subscribe(
        (graphUsers) => {
          this.graphUsers = graphUsers;
        }
      )
  }

}
