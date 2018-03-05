import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
    ApplicationPipesModule
  ],
  exports: [
    PeopleListComponent,
  ],
  declarations: [
    PeopleListComponent,
    PeopleListItemComponent,
    PersonComponent,
  ],
  providers: [
    PeopleService,
    PersonSelectorResolveService,
  ]
})
export class PeopleModule { }
