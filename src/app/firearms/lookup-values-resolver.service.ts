import { ServiceConnectionService } from './../shared/service-connection.service';
import { Observable } from 'rxjs/Observable';
import { FirearmsService } from './firearms.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LookupValuesResolverService implements Resolve<any[]> {

  constructor(private http: ServiceConnectionService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return this.http.getLookupValues();
  }
}
