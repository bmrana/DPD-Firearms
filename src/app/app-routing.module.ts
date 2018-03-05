import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './access-control/login/login.component';
import { PersonSelectorResolveService } from './people/person-selector-resolve.service';
import { AuthGuardService } from './auth-guard.service';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './people/person/person.component';

const routes: Routes = [
  { path: '', redirectTo: 'app/people', pathMatch: 'full'},
  { path: 'app', 
    component: HomeComponent,
    children: [
      { path: 'people', 
        component: PeopleListComponent },
      { path: 'person',
        component: PersonComponent }
    ],
    resolve: {
      home: PersonSelectorResolveService
    },
    canActivate: [AuthGuardService]},
  { path: 'login',
    component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
