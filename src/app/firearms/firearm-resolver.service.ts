import { Firearm } from './firearm.model';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PeopleService } from './../people/people.service';
import { ServiceConnectionService } from './../shared/service-connection.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FirearmResolverService {

  constructor(private http: ServiceConnectionService, private peopleService: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Firearm[]> {
    return this.http.getFirearmsByPerson(this.peopleService.selectedPerson);
  }

}
