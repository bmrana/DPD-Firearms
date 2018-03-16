import { FirearmsService } from './../../firearms/firearms.service';
import { Firearm } from './../../firearms/firearm.model';
import { OrderPipePipe } from './../../shared/pipes/order-pipe.pipe';
import { Subscription } from 'rxjs/Subscription';
import { Qualification } from './../../qualifications/qual.model';
import { QualServiceService } from './../../qualifications/qual-service.service';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

import { User } from '@microsoft/microsoft-graph-types';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  selectedPerson: User;
  quals: Qualification[];
  firearms: Firearm[];
  type = 'duty';
  selectedTabIndex = 0;

  constructor(private peopleService: PeopleService,
              private qualService: QualServiceService,
              private orderPipe: OrderPipePipe,
              private firearmService: FirearmsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectedPerson = this.peopleService.selectedPerson;
    this.quals = this.orderPipe.transform(this.qualService.quals, 'qual_date', true);
    this.firearms = this.firearmService.firearms;
    this.selectTab(this.activatedRoute.snapshot.queryParams['view']);
  }

  selectTab(value: string) {
    this.selectedTabIndex = +value;
  }

  onFilter(value: string) {
    this.type = value;
  }

  onTabChanged(event) {
    this.selectedTabIndex = event.index;
  }
}
