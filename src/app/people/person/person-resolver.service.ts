import { PeopleService } from './../people.service';
import { ServiceConnectionService } from './../../shared/service-connection.service';
import { Observable } from 'rxjs/Observable';
import { QualServiceService } from './../../qualifications/qual-service.service';
import { Qualification } from './../../qualifications/qual.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonResolverService implements Resolve<Qualification[]> {

  constructor(private http: ServiceConnectionService, private peopleService: PeopleService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Qualification[]> {
    return this.http.getQualificationsByPerson(this.peopleService.selectedPerson);
  }
}
