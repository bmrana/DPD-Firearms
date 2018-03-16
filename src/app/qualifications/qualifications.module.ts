import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { QualServiceService } from './qual-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualItemComponent } from './qual-item/qual-item.component';
import { NewQualificationComponent } from './new-qualification/new-qualification.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    QualItemComponent
  ],
  declarations: [QualItemComponent, NewQualificationComponent],
  providers: [
    QualServiceService
  ]
})
export class QualificationsModule { }
