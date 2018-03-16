import { DbPeopleResolverService } from './people/dbpeople-resolver.service';
import { LookupValuesResolverService } from './firearms/lookup-values-resolver.service';
import { NewFirearmComponent } from './firearms/new-firearm/new-firearm.component';
import { FirearmResolverService } from './firearms/firearm-resolver.service';
import { PersonResolverService } from './people/person/person-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './access-control/login/login.component';
import { PersonSelectorResolveService } from './people/person-selector-resolve.service';
import { AuthGuardService } from './auth-guard.service';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './people/person/person.component';
import { NewQualificationComponent } from './qualifications/new-qualification/new-qualification.component';

const routes: Routes = [
  { path: '', redirectTo: 'app/people', pathMatch: 'full'},
  { path: 'app',
    component: HomeComponent,
    children: [
      { path: 'people',
        component: PeopleListComponent },
      { path: 'person',
        component: PersonComponent,
        resolve: {
          person: PersonResolverService,
          firearms: FirearmResolverService,
          lookupValues: LookupValuesResolverService
        }
      },
      { path: 'firearm',
        component: NewFirearmComponent },
      {path: 'qualification',
        component: NewQualificationComponent}
    ],
    resolve: {
      home: PersonSelectorResolveService,
      people: DbPeopleResolverService
    },
    canActivate: [AuthGuardService]
  },
  { path: 'login',
    component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
