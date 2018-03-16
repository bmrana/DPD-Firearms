import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HeaderService {
  currentView = new BehaviorSubject<string>('shooters');
  currentTitle = new BehaviorSubject<string>('Shooters');

  constructor() { }

}
