import { DbPeopleResolverService } from './dbpeople-resolver.service';
import { FirearmsModule } from './../firearms/firearms.module';
import { ActionButtonComponent } from './../shared/action-button/action-button.component';
import { FirearmTypeFilterComponent } from './person/firearm-type-filter/firearm-type-filter.component';
import { QualificationsModule } from './../qualifications/qualifications.module';
import { PersonResolverService } from './person/person-resolver.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { PeopleService } from './people.service';
import { PersonSelectorResolveService } from './person-selector-resolve.service';
import { ApplicationPipesModule } from '../shared/application-pipes.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleListItemComponent } from './people-list/people-list-item/people-list-item.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ApplicationPipesModule,
    QualificationsModule,
    FirearmsModule
  ],
  exports: [
    PeopleListComponent,
  ],
  declarations: [
    PeopleListComponent,
    PeopleListItemComponent,
    PersonComponent,
    FirearmTypeFilterComponent,
    ActionButtonComponent
  ],
  providers: [
    PeopleService,
    PersonSelectorResolveService,
    PersonResolverService,
    DbPeopleResolverService
  ]
})
export class PeopleModule { }
