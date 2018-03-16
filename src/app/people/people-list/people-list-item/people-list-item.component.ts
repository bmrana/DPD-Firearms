import { ServiceConnectionService } from './../../../shared/service-connection.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '@microsoft/microsoft-graph-types';
import { PeopleService } from '../../people.service';
import { Router } from '@angular/router';
import { HeaderService } from '../../../header/header.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-people-list-item',
  templateUrl: './people-list-item.component.html',
  styleUrls: ['./people-list-item.component.css']
})
export class PeopleListItemComponent implements OnInit, OnDestroy {
  @Input() graphUser: User;
  shooterAddedSubs: Subscription;

  constructor(private peopleService: PeopleService,
              private router: Router,
              private headerService: HeaderService,
              private http: ServiceConnectionService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onPersonSelected(shooter) {
    this.peopleService.dbPeople.findIndex(
      p => p.mail === shooter.mail) === -1 ? this.newShooter(shooter) : this.oldShooter(shooter);
  }

  oldShooter(shooter) {
    this.peopleService.selectedPerson = shooter;
    this.navigate(shooter);
  }

  newShooter(shooter) {
    this.peopleService.selectedPerson = shooter;
    this.http.addShooter(shooter)
      .subscribe(r => this.navigate(shooter));
  }

  navigate(shooter) {
    this.headerService.currentView.next('person');
    this.headerService.currentTitle.next(shooter.givenName + ' ' + shooter.surname);
  }
}
