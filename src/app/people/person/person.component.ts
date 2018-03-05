import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

import { User } from '@microsoft/microsoft-graph-types';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  selectedPerson: User;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.selectedPerson = this.peopleService.selectedPerson;
  }

}
