import { HomeService } from './home/home.service';
import { FirearmsModule } from './firearms/firearms.module';
import { ServiceConnectionService } from './shared/service-connection.service';
import { QualificationsModule } from './qualifications/qualifications.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AccessControlModule } from './access-control/access-control.module';
import { PeopleModule } from './people/people.module';
import { GraphConnectService } from './shared/graph-connect.service';
import { AuthGuardService } from './auth-guard.service';
import { HeaderModule } from './header/header.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AccessControlModule,
    PeopleModule,
    FormsModule,
    HeaderModule,
    QualificationsModule,
    HttpClientModule,
    FirearmsModule,
    MatMomentDateModule
  ],
  providers: [
    GraphConnectService,
    AuthGuardService,
    ServiceConnectionService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
