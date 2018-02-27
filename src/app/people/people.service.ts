import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import * as MicrosoftGraphClient from "@microsoft/microsoft-graph-client"
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GraphConnectService } from '../shared/graph-connect.service';


@Injectable()
export class PeopleService {

  constructor(private graphConnectService: GraphConnectService) { }

  getClient(): MicrosoftGraphClient.Client
  {
    var client = MicrosoftGraphClient.Client.init({
      authProvider: (done) => {
          done(null, this.graphConnectService.getAccessToken()); //first parameter takes an error if you can't get an access token
      }
    });
    return client;
  }
}
