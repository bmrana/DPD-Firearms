import { Component, OnInit, Input } from '@angular/core';
import { User } from '@microsoft/microsoft-graph-types';
import { PeopleService } from '../../people.service';
import { Router } from '@angular/router';
import { HeaderService } from '../../../header/header.service';

@Component({
  selector: 'app-people-list-item',
  templateUrl: './people-list-item.component.html',
  styleUrls: ['./people-list-item.component.css']
})
export class PeopleListItemComponent implements OnInit {
  @Input() graphUser: User;

  constructor(private peopleService: PeopleService, 
              private router: Router,
              private headerService: HeaderService) { }

  ngOnInit() {
  }

  onPersonSelected(shooter) {
    this.peopleService.selectedPerson = shooter;
    this.headerService.currentView.next('shooter');
    this.headerService.currentTitle.next(shooter.givenName + ' ' + shooter.surname);
    this.router.navigate(['app/person']);
  }
}
