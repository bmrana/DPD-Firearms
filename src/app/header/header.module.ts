import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialModule } from '../material/material.module';
import { ApplicationPipesModule } from '../shared/application-pipes.module';
import { PeopleModule } from '../people/people.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderService } from './header.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ApplicationPipesModule,
    PeopleModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [
    HeaderService
  ]
})
export class HeaderModule { }
