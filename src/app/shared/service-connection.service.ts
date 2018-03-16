import { Observable } from 'rxjs/Observable';
import { PeopleService } from './../people/people.service';
import { FirearmsService } from './../firearms/firearms.service';
import { Firearm } from './../firearms/firearm.model';
import { QualServiceService } from './../qualifications/qual-service.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from '@microsoft/microsoft-graph-types';

import { Qualification } from './../qualifications/qual.model';

@Injectable()
export class ServiceConnectionService {
  headers = new HttpHeaders({ 'Content-Type' : 'application/json' });

  constructor(
    private http: HttpClient,
    private peopleService: PeopleService,
    private qualService: QualServiceService,
    private firearmsService: FirearmsService) { }
    serviceURL = 'https://services.dentontraining.com/';

    getLookupValues() {
      return this.http.get<any[]>(this.serviceURL + 'Firearms/App/FirearmsAppService.svc/getLookupValues')
        .map(
          (values) => {
            this.firearmsService.setLookupValues(values);
            return values;
          }
        );
    }

    getPeople() {
      return this.http.get<any[]>(this.serviceURL + 'Firearms/App/FirearmsAppService.svc/getPeople')
        .map(
          (people) => {
            this.peopleService.setPeopleFromDB(people);
            return people;
          }
        );
    }
    getQualificationsByPerson(user: User) {
      let params = new HttpParams();
      params = params.append('mail', user.mail);
      return this.http.get<Qualification[]>(this.serviceURL + 'Firearms/App/FirearmsAppService.svc/getQualificationsByPerson',
        {params: params})
        .map(
          (qualifications: Qualification[]) => {
            this.qualService.setQuals(qualifications);
            return qualifications;
          }
        );
    }

    getFirearmsByPerson(user: User) {
      let params = new HttpParams();
      params = params.append('mail', user.mail);
      return this.http.get<Firearm[]>(this.serviceURL + 'Firearms/App/FirearmsAppService.svc/getFirearmsByPerson',
        {params: params})
        .map(
          (firearms: Firearm[]) => {
            this.firearmsService.setFirearms(firearms);
            return firearms;
          }
        );
    }

    addShooter(shooter: User): Observable<number> {
      return this.http.post(this.serviceURL + 'Firearms/App/FirearmsAppService.svc/addShooter',
      shooter, {headers: this.headers})
      .map(
        (result: number) => {
          this.peopleService.insertAddedShooter(result);
          return result;
        }
      );
    }

    addFirearm(firearm: Firearm): Observable<Firearm> {
      return this.http.post(this.serviceURL + 'Firearms/App/FirearmsAppService.svc/updateFirearm',
        firearm, {headers: this.headers})
        .map(
          (result: Firearm) => {
            this.firearmsService.addFirearm(result);
            return result;
          }
        );
    }
}
