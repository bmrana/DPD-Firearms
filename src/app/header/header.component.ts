import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people/people.service';
import { FormControl } from '@angular/forms';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { Subscription } from 'rxjs/Subscription';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchBox = new FormControl;
  currentViewSubs: Subscription;
  currentView: string;
  currentTitleSubs: Subscription;
  title: string;

  constructor(private peopleService: PeopleService,
              private headerService: HeaderService,
              private router: Router) { }

  ngOnInit() {
    this.currentViewSubs = this.headerService.currentView
      .subscribe(
        (view) => this.currentView = view
      );
    this.currentTitleSubs = this.headerService.currentTitle
      .subscribe(
        (title) => this.title = title
      );

    this.peopleService.filteredGraphUsers = this.searchBox.valueChanges
      .pipe(
        startWith<string | MicrosoftGraph.User>(''),
        map(value => typeof value === 'string' ? value : value.surname),
        map(surname => surname ? this.filter(surname) : this.peopleService.graphUsers.value.slice())
      );
  }

  filter(surname: string): MicrosoftGraph.User[] {
    return this.peopleService.graphUsers.value.filter(graphUser =>
      graphUser.surname.toLowerCase().indexOf(surname.toLowerCase()) === 0);
  }

  onSearch() {
    this.headerService.currentView.next('search');
  }

  onCloseSearch() {
    this.searchBox.setValue('');
    this.headerService.currentView.next('shooters');
  }

  onBack() {
    this.headerService.currentView.next('shooters');
    this.headerService.currentTitle.next('Shooters');
  }

  onBacktoShooter() {
    if (this.currentView === 'firearm') {
      this.headerService.currentView.next('firearms');
    }

    if (this.currentView === 'qualification') {
      this.headerService.currentView.next('person');
    }
  }
}
