import { FormsModule } from '@angular/forms';
import { ApplicationPipesModule } from './../shared/application-pipes.module';
import { FirearmResolverService } from './firearm-resolver.service';
import { MaterialModule } from './../material/material.module';
import { FirearmsService } from './firearms.service';
import { FirearmItemComponent } from './firearm-item/firearm-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFirearmComponent } from './new-firearm/new-firearm.component';
import { LookupValuesResolverService } from './lookup-values-resolver.service';
import { NewSelectionComponent } from './new-firearm/new-selection/new-selection.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ApplicationPipesModule,
    FormsModule
  ],
  exports: [
    FirearmItemComponent,
  ],
  entryComponents: [
    NewSelectionComponent    
  ],
  declarations: [
    FirearmItemComponent,
    NewFirearmComponent,
    NewSelectionComponent
  ],
  providers: [
    FirearmsService,
    FirearmResolverService,
    LookupValuesResolverService
  ]
})
export class FirearmsModule { }
