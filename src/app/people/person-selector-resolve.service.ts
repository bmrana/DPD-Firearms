import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import { PeopleService } from './people.service';

@Injectable()
export class PersonSelectorResolveService implements Resolve<MicrosoftGraph.User[]> {

  constructor(private peopleService: PeopleService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MicrosoftGraph.User[]> {
    return this.peopleService.getPoliceUsers();
  }
}
