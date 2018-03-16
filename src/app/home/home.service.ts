import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HomeService {
  snackMessage = new Subject<string>();

  constructor() { }

}
