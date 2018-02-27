import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonSelectorComponent } from './person-selector/person-selector.component';
import { MaterialModule } from '../material/material.module';
import { PeopleService } from './people.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [PersonSelectorComponent],
  providers: [
    PeopleService
  ]
})
export class PeopleModule { }
