import { HomeService } from './home.service';
import { HeaderService } from './../header/header.service';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people/people.service';
import { Subscription } from 'rxjs/Subscription';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  graphUsers: MicrosoftGraph.User[];
  snackBarSubs: Subscription;
  graphUsersSubs: Subscription;
  currentViewSubs: Subscription;

  constructor(private peopleService: PeopleService,
    public homeService: HomeService,
    private headerService: HeaderService,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    if (!this.peopleService.selectedPerson) {
      this.router.navigate(['/']);
    }

    this.graphUsersSubs = this.peopleService.graphUsers
      .subscribe(
        (graphUsers) => {
          this.graphUsers = graphUsers;
        }
      );

    this.currentViewSubs = this.headerService.currentView
      .subscribe(
        (currentView) => {
          console.log(currentView);
          switch (currentView) {
            case 'shooters':
              this.router.navigate(['app/people']);
              break;
            case 'person':
              this.router.navigate(['app/person'], { queryParams: { view: 0 } });
              break;
            case 'search':
              this.router.navigate(['app/people']);
              break;
            case 'firearms':
              this.router.navigate(['app/person'], { queryParams: { view: 1 } });
              break;
            case 'firearm':
              this.router.navigate(['app/firearm']);
              break;
            case 'qualification':
              this.router.navigate(['app/qualification']);
              break;
          }
        }
      );

    this.snackBarSubs = this.homeService.snackMessage
      .subscribe(
        (message) => {
          this.openSnackBar(message);
        }
      );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok', {
      duration: 5000,
    });
  }

}
