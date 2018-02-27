import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AccessControlModule } from './access-control/access-control.module';
import { PeopleModule } from './people/people.module';
import { GraphConnectService } from './shared/graph-connect.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AccessControlModule,
    PeopleModule,
  ],
  providers: [
    GraphConnectService   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
