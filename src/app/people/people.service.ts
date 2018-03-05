import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import * as MicrosoftGraphClient from "@microsoft/microsoft-graph-client"
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GraphConnectService } from '../shared/graph-connect.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class PeopleService {
  graphUsers = new BehaviorSubject<MicrosoftGraph.User[]>(null);
  filteredGraphUsers: Observable<MicrosoftGraph.User[]>;
  selectedPerson: MicrosoftGraph.User;

  constructor(private graphConnectService: GraphConnectService) { }

  getClient(): MicrosoftGraphClient.Client {
    var client = MicrosoftGraphClient.Client.init({
      authProvider: (done) => {
        done(null, this.graphConnectService.getAccessToken()); //first parameter takes an error if you can't get an access token
      }
    });
    return client;
  }

  getPoliceUsers(): Observable<MicrosoftGraph.User[]> {
    const client = this.getClient();
    return Observable.fromPromise(
      client
        .api(`myorganization/users?$filter=startsWith(Department, 'Police')&$top=999`)
        .get()
        .then(
          (res) => {
            this.graphUsers.next(res.value);
            return res;
          }
        )
    );
  }

  getTestUsers(): any {
    const users = [
      { name: 'Rana, Brandon', value: 0 },
      { name: 'Kidwell, Tood', value: 1 }
    ]

    return users;
  }
  setPoliceUsers(graphUsers) {
    this.graphUsers = graphUsers;
  }
}
